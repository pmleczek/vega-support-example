import { BottomBar } from "@/components";
import useChat from "@/hooks/useChat";
import { Color } from "@/utils/style";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { messages } = useChat();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {messages.map((message) => (
          <Text key={message.id} style={styles.response}>
            {message.content}
          </Text>
        ))}
      </ScrollView>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0a0a0a",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  list: {
    flex: 1,
  },
  response: {
    color: Color.foregroundPrimary,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 64,
  },
});
