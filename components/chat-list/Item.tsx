import { Color } from "@/utils/style";
import { StyleSheet, Text } from "react-native";
import { ItemProps } from "./types";

const Item = ({ message }: ItemProps) => {
  return <Text style={styles.text}>{message.content}</Text>;
};

export default Item;

const styles = StyleSheet.create({
  text: {
    color: Color.foregroundPrimary,
    fontSize: 16,
    fontWeight: "500",
  },
});
