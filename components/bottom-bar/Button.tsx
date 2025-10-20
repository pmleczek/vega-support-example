import { Color } from "@/utils/style";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowUpIcon } from "../icons";
import type { ButtonProps } from "./types";

const Button = ({ onPress, style = {} }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ArrowUpIcon color={Color.foregroundPrimary} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.backgroundPrimary,
    borderColor: Color.borderSecondary,
    borderWidth: 1,
    borderRadius: 9999,
    height: 56,
    width: 56,
  },
});
