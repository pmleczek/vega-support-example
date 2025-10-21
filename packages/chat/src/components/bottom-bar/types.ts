import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  disabled?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface InputProps {
  children?: ReactNode;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}
