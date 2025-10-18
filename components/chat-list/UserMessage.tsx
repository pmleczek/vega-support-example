import { Color } from "@/utils/style";
import { StyleSheet, Text } from "react-native";
import { UserMessageProps } from "./types";

const UserMessage = ({ message }: UserMessageProps) => {
  return <Text style={styles.text}>{message}</Text>;
};

export default UserMessage;

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#262626',
    borderRadius: 16,
    color: Color.foregroundPrimary,
    fontSize: 18,
    lineHeight: 24,
    maxWidth: '75%',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});
