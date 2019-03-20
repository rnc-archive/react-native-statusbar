declare module "@react-native-community/status-bar" {
  import React from 'react';

  export type StatusBarStyle = "default" | "light-content" | "dark-content";

  export type StatusBarAnimation = "none" | "fade" | "slide";

  export interface StatusBarPropsIOS {
    /**
     * Sets the color of the status bar text.
     */
    barStyle?: StatusBarStyle;

    /**
     * If the network activity indicator should be visible.
     */
    networkActivityIndicatorVisible?: boolean;

    /**
     * The transition effect when showing and hiding the status bar using
     * the hidden prop. Defaults to 'fade'.
     */
    showHideTransition?: "fade" | "slide";
  }

  export interface StatusBarPropsAndroid {
    /**
     * The background color of the status bar.
     */
    backgroundColor?: string;

    /**
     * If the status bar is translucent. When translucent is set to true,
     * the app will draw under the status bar. This is useful when using a
     * semi transparent status bar color.
     */
    translucent?: boolean;
  }

  export interface StatusBarProps extends StatusBarPropsIOS, StatusBarPropsAndroid {
    /**
     * If the transition between status bar property changes should be
     * animated. Supported for backgroundColor, barStyle and hidden.
     */
    animated?: boolean;

    /**
     * If the status bar is hidden.
     */
    hidden?: boolean;
  }

  export class StatusBar extends React.Component<StatusBarProps> {
    /**
     * The current height of the status bar on the device.
     * @platform android
     */
    static currentHeight?: number;

    /**
     * Show or hide the status bar
     * @param hidden The dialog's title.
     * @param animation Optional animation when
     *    changing the status bar hidden property.
     */
    static setHidden: (hidden: boolean, animation?: StatusBarAnimation) => void;

    /**
     * Set the status bar style
     * @param style Status bar style to set
     * @param animated Animate the style change.
     */
    static setBarStyle: (style: StatusBarStyle, animated?: boolean) => void;

    /**
     * Control the visibility of the network activity indicator
     * @param visible Show the indicator.
     */
    static setNetworkActivityIndicatorVisible: (visible: boolean) => void;

    /**
     * Set the background color for the status bar
     * @param color Background color.
     * @param animated Animate the style change.
     */
    static setBackgroundColor: (color: string, animated?: boolean) => void;

    /**
     * Control the translucency of the status bar
     * @param translucent Set as translucent.
     */
    static setTranslucent: (translucent: boolean) => void;
  }

  export default StatusBar;
}
