import useChat from "@/hooks/useChat";
import { LegendList } from "@legendapp/list";
import { StyleSheet } from "react-native";
import Item from "./Item";

const ChatList = () => {
  const { messages } = useChat();

  return (
    <LegendList
      data={messages}
      renderItem={({ item }) => <Item message={item} />}
      keyExtractor={(item) => item.id}
      style={styles.list}
      recycleItems
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
});
