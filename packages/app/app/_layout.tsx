import { Color } from "@llm-chat/chat";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { setBackgroundColorAsync } from "expo-system-ui";
import React from "react";
import { Platform } from "react-native";

if (Platform.OS === "ios") {
  setBackgroundColorAsync(Color.backgroundPrimary);
}

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Color.backgroundPrimary },
        }}
      />
      <StatusBar style="light" />
    </>
  );
}
