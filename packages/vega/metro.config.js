/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
+ * Metro configuration
+ * https://facebook.github.io/metro/docs/configuration
  *
+ * @type {import('metro-config').MetroConfig}
  */
const config = {
  projectRoot: __dirname,
  watchFolders: [
    path.resolve(__dirname, '../../packages/chat'),
    path.resolve(__dirname, '../../packages/vega'),
    path.resolve(__dirname, '../../node_modules'),
  ],
  resolver: {
    disableHierarchicalLookup: true,
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
