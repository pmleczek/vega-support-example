import { Color } from "@/utils/style";
import { StyleSheet, TextInput } from "react-native";
import type { InputProps } from "./types";

const Input = ({ onChangeText, value }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Ask something..."
      placeholderTextColor={Color.foregroundSecondary}
      value={value}
      onChangeText={onChangeText}
      multiline
      numberOfLines={1}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 8,
    color: Color.foregroundPrimary,
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
