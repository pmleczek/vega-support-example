import { Color } from "../../utils/style";
import { StyleSheet, TextInput, View } from "react-native";
import type { InputProps } from "./types";

const Input = ({ children, disabled, onChangeText, value }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        editable={!disabled}
        style={styles.input}
        placeholder="Ask something..."
        placeholderTextColor={
          !disabled ? Color.foregroundSecondary : Color.borderSecondary
        }
        value={value}
        onChangeText={onChangeText}
        multiline
        numberOfLines={1}
      />
      {children}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disabled: {
    backgroundColor: Color.border,
  },
  input: {
    backgroundColor: Color.backgroundSecondary,
    borderColor: Color.borderSecondary,
    borderWidth: 1,
    borderRadius: 999,
    color: Color.foregroundPrimary,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    height: 56,
    paddingLeft: 24,
    paddingRight: 56,
    paddingVertical: 18,
  },
});
