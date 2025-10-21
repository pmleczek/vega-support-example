import { Color } from "../../utils/style";
import { StyleSheet, Text } from "react-native";

const MistakesNotice = () => (
  <Text style={styles.text}>
    AI can make mistakes. Please double-check the responses.
  </Text>
);

export default MistakesNotice;

const styles = StyleSheet.create({
  text: {
    color: Color.foregroundSecondary,
    fontSize: 12,
    fontWeight: '500',
    textAlign: "center",
    marginTop: 12,
  },
});
