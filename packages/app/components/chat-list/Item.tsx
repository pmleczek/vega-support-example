import { Color } from "@/utils/style";
import { StyleSheet, View } from "react-native";
import AssistantMessage from "../assistant-message";
import { ItemProps } from "./types";
import UserMessage from "./UserMessage";

const Item = ({ message }: ItemProps) => {
  if (message.role === "user") {
    return (
      <View style={[styles.container, styles.user]}>
        <UserMessage message={message.content} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AssistantMessage message={message.content} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  text: {
    color: Color.foregroundPrimary,
    fontSize: 16,
    fontWeight: "500",
  },
  user: {
    alignItems: "flex-end",
  },
});
