import { Platform, StyleSheet, TextInput, View } from "react-native";
import { Color, FontSize } from "../../utils/style";
import type { InputProps } from "./types";

// @ts-ignore - 'kepler' doesn't have overlap with default platforms
const INPUT_HEIGHT = Platform.OS === "kepler" ? 72 : 56;

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
    fontSize: FontSize.md,
    lineHeight: 1.5 * FontSize.md,
    fontWeight: "500",
    height: INPUT_HEIGHT,
    // @ts-ignore - 'kepler' doesn't have overlap with default platforms
    paddingLeft: Platform.OS === "kepler" ? 32 : 24,
    paddingRight: 56,
    paddingVertical: (72 - 1.5 * FontSize.md) / 2,
  },
});
