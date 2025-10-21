/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import {BottomBar, ChatList, Color} from '@llm-chat/chat';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ChatList />
        <BottomBar />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
