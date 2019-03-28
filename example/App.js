/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import StatusBar from '@react-native-community/status-bar';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

type MutationBtnProps = {
  label: string,
  testID: string,
  onPress: () => void,
};

const MutationBtn = ({label, onPress, testID}: MutationBtnProps) => {
  return (
    <TouchableHighlight
      testID="set-hidden-slide"
      style={styles.wrapper}
      onPress={onPress}>
      <View style={styles.button}>
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const App = () => (
  <View style={styles.container}>
    <MutationBtn
      testID="set-hidden-slide"
      label="setHidden(true, 'slide')"
      onPress={() => StatusBar.setHidden(true, 'slide')}
    />

    <MutationBtn
      testID="set-visible-fade"
      label="setHidden(false, 'fade')"
      onPress={() => StatusBar.setHidden(false, 'fade')}
    />

    <MutationBtn
      testID="set-default-style"
      label="setBarStyle('default', true)"
      onPress={() => StatusBar.setBarStyle('default', true)}
    />

    <MutationBtn
      testID="set-light-style"
      label="setBarStyle('light-content', true)"
      onPress={() => StatusBar.setBarStyle('light-content', true)}
    />

    <MutationBtn
      testID="set-network-hidden"
      label="setNetworkActivityIndicatorVisible(true)"
      onPress={() => StatusBar.setNetworkActivityIndicatorVisible(true)}
    />

    <MutationBtn
      testID="set-network-visible"
      label="setNetworkActivityIndicatorVisible(false)"
      onPress={() => StatusBar.setNetworkActivityIndicatorVisible(false)}
    />
  </View>
);

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

export default App;
