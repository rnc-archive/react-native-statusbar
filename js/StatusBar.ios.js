
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

const NativeEventEmitter = require('NativeEventEmitter');
const Modules = require('NativeModules');

/**
 * Use `StatusBar` for mutating the status bar.
 */
class StatusBarIOS extends NativeEventEmitter {}

module.exports = new StatusBarIOS(Modules.RNCStatusBarManager);
