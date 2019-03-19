/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import StatusBar from "@react-native-community/status-bar";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          testID="set-hidden-slide"
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(true, "slide");
          }}
        >
          <View style={styles.button}>
            <Text>setHidden(true, 'slide')</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(false, "fade");
          }}
        >
          <View style={styles.button}>
            <Text>setHidden(false, 'fade')</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBarStyle("default", true);
          }}
        >
          <View style={styles.button}>
            <Text>setBarStyle('default', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBarStyle("light-content", true);
          }}
        >
          <View style={styles.button}>
            <Text>setBarStyle('light-content', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setNetworkActivityIndicatorVisible(true);
          }}
        >
          <View style={styles.button}>
            <Text>setNetworkActivityIndicatorVisible(true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setNetworkActivityIndicatorVisible(false);
          }}
        >
          <View style={styles.button}>
            <Text>setNetworkActivityIndicatorVisible(false)</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#f5fcff',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  modalButton: {
    marginTop: 10,
  },
});
