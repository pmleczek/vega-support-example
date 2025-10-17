import useLLM from "@/hooks/useLLM";
import { useCallback, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const getLLMResponse = useLLM();

  const handleSend = useCallback(async () => {
    setLoading(true);
    setResponse("");

    const promptCopy = prompt;
    setPrompt("");
    const { content } = await getLLMResponse(promptCopy);

    setResponse(content);
    setLoading(false);
  }, [getLLMResponse, prompt]);

  return (
    <View style={styles.container}>
      <Text>LLM Response:</Text>
      {loading || !response ? (
        <Text>{loading ? "AI is thinking..." : "Ask something!"}</Text>
      ) : (
        <ScrollView>
          <Text style={styles.response}>{response}</Text>
        </ScrollView>
      )}
      <TextInput
        style={styles.input}
        placeholder="Ask something..."
        placeholderTextColor="#525252"
        value={prompt}
        onChangeText={setPrompt}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonLabel}>Send</Text>
      </TouchableOpacity>
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
  buttonLabel: {
    color: "#fafafa",
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  input: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 256,
  },
  response: {
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 64,
  },
});
