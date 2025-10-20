import { Color } from "@/utils/style";
import { StyleSheet, TextInput, View } from "react-native";
import type { InputProps } from "./types";

const Input = ({ children, onChangeText, value }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask something..."
        placeholderTextColor={Color.foregroundSecondary}
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
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
});
