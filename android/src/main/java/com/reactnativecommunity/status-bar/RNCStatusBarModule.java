
package com.reactnativecommunity.status-bar;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCStatusBarModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCStatusBarModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCStatusBar";
  }
}