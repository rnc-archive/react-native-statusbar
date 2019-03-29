# react-native-status-bar

[![npm package](https://img.shields.io/npm/v/@react-native-community/status-bar.svg)](https://www.npmjs.org/package/@react-native-community/status-bar)
[![CircleCI Status](https://img.shields.io/circleci/project/github/react-native-community/react-native-statusbar/master.svg)](https://circleci.com/gh/react-native-community/workflows/react-native-netinfo/tree/master) ![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-lightgrey.svg) 
![MIT License](https://img.shields.io/npm/l/@react-native-community/status-bar.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Getting started

`$ npm install @react-native-community/status-bar --save`

### Mostly automatic installation

`$ react-native link @react-native-community/status-bar`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-status-bar` and add `RNCStatusBar.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCStatusBar.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactnativecommunity.statusbar.RNCStatusBarPackage;` to the imports at the top of the file
- Add `new RNCStatusBarPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-status-bar'
   project(':react-native-status-bar').projectDir = new File(rootProject.projectDir,  '../../node_modules/@react-native-community/status-bar/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
   implementation project(':react-native-status-bar')
   ```

## Usage

```javascript
import StatusBar from '@react-native-community/status-bar';

function MyComponent() {
  return (
    <TouchableHighlight
      style={styles.wrapper}
      onPress={() => StatusBar.setHidden(true, "slide");} // or "fade"
    >
      <View style={styles.button}>
        <Text> Hide status bar </Text>
      </View>
    </TouchableHighlight>
  )
}
```

## Api

For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overriden by the one set by the component in the next render.

### Constants

`currentHeight` (Android only) The height of the status bar.

### Props

* [`animated`](#animated)
* [`barStyle`](#barstyle)
* [`hidden`](#hidden)
* [`backgroundColor`](#backgroundcolor)
* [`translucent`](#translucent)
* [`networkActivityIndicatorVisible`](#networkactivityindicatorvisible)
* [`showHideTransition`](#showhidetransition)

### Methods

* [`setHidden`](#sethidden)
* [`setBarStyle`](#setbarstyle)
* [`setNetworkActivityIndicatorVisible`](#setnetworkactivityindicatorvisible)
* [`setBackgroundColor`](#setbackgroundcolor)
* [`setTranslucent`](#settranslucent)

### Type Definitions

* [`StatusBarStyle`](#statusbarstyle)
* [`StatusBarAnimation`](#statusbaranimation)

---

# Reference

## Props

### `animated`

If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### `barStyle`

Sets the color of the status bar text.

| Type                                             | Required |
| ------------------------------------------------ | -------- |
| enum('default', 'light-content', 'dark-content') | No       |

---

### `hidden`

If the status bar is hidden.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### `backgroundColor`

The background color of the status bar.

| Type               | Required | Platform |
| ------------------ | -------- | -------- |
| [color](https://facebook.github.io/react-native/docs/colors) | No       | Android  |

---

### `translucent`

If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### `networkActivityIndicatorVisible`

If the network activity indicator should be visible.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### `showHideTransition`

The transition effect when showing and hiding the status bar using the `hidden` prop. Defaults to 'fade'.

| Type                  | Required | Platform |
| --------------------- | -------- | -------- |
| enum('fade', 'slide') | No       | iOS      |

## Methods

### `setHidden()`

```javascript
static setHidden(hidden: boolean, [animation]: StatusBarAnimation)
```

Show or hide the status bar

**Parameters:**

| Name      | Type                                                  | Required | Description                                                      |
| --------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| hidden    | boolean                                               | Yes      | Hide the status bar.                                             |
| animation | [StatusBarAnimation](#statusbaranimation) | No       | Optional animation when changing the status bar hidden property. |

---

### `setBarStyle()`

```javascript
static setBarStyle(style: StatusBarStyle, [animated]: boolean)
```

Set the status bar style

**Parameters:**

| Name     | Type                                          | Required | Description               |
| -------- | --------------------------------------------- | -------- | ------------------------- |
| style    | [StatusBarStyle](
#statusbarstyle) | Yes      | Status bar style to set   |
| animated | boolean                                       | No       | Animate the style change. |

---

### `setNetworkActivityIndicatorVisible()`

```javascript
static setNetworkActivityIndicatorVisible(visible: boolean)
```

Control the visibility of the network activity indicator

**Parameters:**

| Name    | Type    | Required | Description         |
| ------- | ------- | -------- | ------------------- |
| visible | boolean | Yes      | Show the indicator. |

---

### `setBackgroundColor()`

```javascript
static setBackgroundColor(color: string, [animated]: boolean)
```

Set the background color for the status bar

**Parameters:**

| Name     | Type    | Required | Description               |
| -------- | ------- | -------- | ------------------------- |
| color    | [color](https://facebook.github.io/react-native/docs/colors)  | Yes      | Background color.         |
| animated | boolean | No       | Animate the style change. |

---

### `setTranslucent()`

```javascript
static setTranslucent(translucent: boolean)
```

Control the translucency of the status bar

**Parameters:**

| Name        | Type    | Required | Description         |
| ----------- | ------- | -------- | ------------------- |
| translucent | boolean | Yes      | Set as translucent. |

## Type Definitions

### StatusBarStyle

Status bar style

| Type  |
| ----- |
| $Enum |

**Constants:**

| Value         | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| default       | Default status bar style (dark for iOS, light for Android)           |
| light-content | Dark background, white texts and icons                               |
| dark-content  | Light background, dark texts and icons (requires API>=23 on Android) |

---

### StatusBarAnimation

Status bar animation

| Type  |
| ----- |
| $Enum |

**Constants:**

| Value | Description     |
| ----- | --------------- |
| none  | No animation    |
| fade  | Fade animation  |
| slide | Slide animation |

