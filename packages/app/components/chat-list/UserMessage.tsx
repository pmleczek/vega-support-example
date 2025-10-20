import { Color } from "@/utils/style";
import { StyleSheet } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { UserMessageProps } from "./types";

const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <Animated.Text entering={SlideInDown.duration(250)} style={styles.text}>
      {message}
    </Animated.Text>
  );
};

export default UserMessage;

const styles = StyleSheet.create({
  text: {
    backgroundColor: Color.border,
    borderRadius: 16,
    color: Color.foregroundPrimary,
    fontSize: 18,
    lineHeight: 24,
    maxWidth: "75%",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});
