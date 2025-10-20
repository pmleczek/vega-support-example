import useAppState from "@/hooks/useAppState";
import useChat from "@/hooks/useChat";
import { LegendList } from "@legendapp/list";
import { StyleSheet } from "react-native";
import Item from "./Item";
import Placeholder from "./Placeholder";
import Separator from "./Separator";

const ChatList = () => {
  const { loading } = useAppState();
  const { messages } = useChat();

  if (!messages.length) {
    return <Placeholder />;
  }

  return (
    <LegendList
      data={messages}
      renderItem={({ item }) => <Item message={item} />}
      keyExtractor={(item) => item.id}
      style={styles.list}
      recycleItems
      ItemSeparatorComponent={Separator}
      ListFooterComponent={loading ? Separator.WithLoader : Separator}
      maintainScrollAtEnd
      maintainScrollAtEndThreshold={0.1}
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
