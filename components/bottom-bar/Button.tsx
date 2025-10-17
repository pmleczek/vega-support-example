import { Color } from "@/utils/style";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import type { ButtonProps } from "./types";

const Button = ({ onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>Send</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroundPrimary,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    color: Color.foregroundPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});
