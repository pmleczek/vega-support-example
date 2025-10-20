import type { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface InputProps {
  children?: ReactNode;
  onChangeText: (text: string) => void;
  value: string;
}
