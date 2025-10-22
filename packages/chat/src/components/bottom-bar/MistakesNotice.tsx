import { Platform, StyleSheet, Text } from "react-native";
import { Color, FontSize } from "../../utils/style";

const MistakesNotice = () => (
  <Text style={styles.text}>
    AI can make mistakes. Please double-check the responses.
  </Text>
);

export default MistakesNotice;

const styles = StyleSheet.create({
  text: {
    color: Color.foregroundSecondary,
    fontSize: FontSize.xs,
    fontWeight: "500",
    textAlign: "center",
    // @ts-ignore - 'kepler' doesn't have overlap with default platforms
    marginTop: Platform.OS === "kepler" ? 18 : 12,
  },
});
