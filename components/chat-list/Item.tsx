import { Color } from "@/utils/style";
import { StyleSheet, Text, View } from "react-native";
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
      <Text style={styles.text}>{message.content}</Text>
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
