
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.reactnativecommunity.statusbar;

import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.os.Build;
import androidx.core.view.ViewCompat;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowManager;
import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import java.util.Map;
import javax.annotation.Nullable;

/**
 * {@link NativeModule} that allows changing the appearance of the status bar.
 */
@ReactModule(name = RNCStatusBarModule.NAME)
public class RNCStatusBarModule extends ReactContextBaseJavaModule {

  private static final String HEIGHT_KEY = "HEIGHT";
  private static final String DEFAULT_BACKGROUND_COLOR_KEY = "DEFAULT_BACKGROUND_COLOR";
  public static final String NAME = "RNCStatusBarManager";

  public RNCStatusBarModule(ReactApplicationContext reactContext) {

    super(reactContext);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public @Nullable Map<String, Object> getConstants() {
    final Context context = getReactApplicationContext();
    final Activity activity = getCurrentActivity();

    final int heightResId = context.getResources()
      .getIdentifier("status_bar_height", "dimen", "android");
    final float height = heightResId > 0 ?
      PixelUtil.toDIPFromPixel(context.getResources().getDimensionPixelSize(heightResId)) :
      0;
    String statusBarColorString = "black";

    if (activity != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      final int statusBarColor = activity.getWindow().getStatusBarColor();
      statusBarColorString = String.format("#%06X", (0xFFFFFF & statusBarColor));
    }

    return MapBuilder.<String, Object>of(
      HEIGHT_KEY, height, DEFAULT_BACKGROUND_COLOR_KEY, statusBarColorString);
  }

  @ReactMethod
  public void setColor(final int color, final boolean animated) {
    final Activity activity = getCurrentActivity();
    if (activity == null) {
      FLog.w(ReactConstants.TAG, "StatusBarModule: Ignored status bar change, current activity is null.");
      return;
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

      UiThreadUtil.runOnUiThread(
          new GuardedRunnable(getReactApplicationContext()) {
            @TargetApi(Build.VERSION_CODES.LOLLIPOP)
            @Override
            public void runGuarded() {
              activity
                  .getWindow()
                  .addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
              if (animated) {
                int curColor = activity.getWindow().getStatusBarColor();
                ValueAnimator colorAnimation =
                    ValueAnimator.ofObject(new ArgbEvaluator(), curColor, color);

                colorAnimation.addUpdateListener(
                    new ValueAnimator.AnimatorUpdateListener() {
                      @Override
                      public void onAnimationUpdate(ValueAnimator animator) {
                        activity
                            .getWindow()
                            .setStatusBarColor((Integer) animator.getAnimatedValue());
                      }
                    });
                colorAnimation.setDuration(300).setStartDelay(0);
                colorAnimation.start();
              } else {
                activity.getWindow().setStatusBarColor(color);
              }
            }
          });
    }
  }

  @ReactMethod
  public void setTranslucent(final boolean translucent) {
    final Activity activity = getCurrentActivity();
    if (activity == null) {
      FLog.w(ReactConstants.TAG, "StatusBarModule: Ignored status bar change, current activity is null.");
      return;
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      UiThreadUtil.runOnUiThread(
        new GuardedRunnable(getReactApplicationContext()) {
          @TargetApi(Build.VERSION_CODES.LOLLIPOP)
          @Override
          public void runGuarded() {
            // If the status bar is translucent hook into the window insets calculations
            // and consume all the top insets so no padding will be added under the status bar.
            View decorView = activity.getWindow().getDecorView();
            if (translucent) {
              decorView.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
                @Override
                public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                  WindowInsets defaultInsets = v.onApplyWindowInsets(insets);
                  return defaultInsets.replaceSystemWindowInsets(
                    defaultInsets.getSystemWindowInsetLeft(),
                    0,
                    defaultInsets.getSystemWindowInsetRight(),
                    defaultInsets.getSystemWindowInsetBottom());
                }
              });
            } else {
              decorView.setOnApplyWindowInsetsListener(null);
            }

            ViewCompat.requestApplyInsets(decorView);
          }
        });
    }
  }

  @ReactMethod
  public void setHidden(final boolean hidden) {
    final Activity activity = getCurrentActivity();
    if (activity == null) {
      FLog.w(ReactConstants.TAG, "StatusBarModule: Ignored status bar change, current activity is null.");
      return;
    }
    UiThreadUtil.runOnUiThread(
      new Runnable() {
        @Override
        public void run() {
          if (hidden) {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
          } else {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
          }
        }
      });
  }

  @ReactMethod
  public void setStyle(@Nullable final String style) {
    final Activity activity = getCurrentActivity();
    if (activity == null) {
      FLog.w(ReactConstants.TAG, "StatusBarModule: Ignored status bar change, current activity is null.");
      return;
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      UiThreadUtil.runOnUiThread(
        new Runnable() {
          @TargetApi(Build.VERSION_CODES.M)
          @Override
          public void run() {
            View decorView = activity.getWindow().getDecorView();
            int systemUiVisibilityFlags = decorView.getSystemUiVisibility();
            if ("dark-content".equals(style)) {
              systemUiVisibilityFlags |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            } else {
              systemUiVisibilityFlags &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            }
            decorView.setSystemUiVisibility(systemUiVisibilityFlags);
          }
        }
      );
    }
  }
}
