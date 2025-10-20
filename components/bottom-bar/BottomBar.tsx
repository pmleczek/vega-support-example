import useChat from "@/hooks/useChat";
import useLLM from "@/hooks/useLLM";
import type { Message } from "@/types";
import { randomUUID } from "expo-crypto";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "./Button";
import Input from "./Input";
import MistakesNotice from "./MistakesNotice";

const BottomBar = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { pushMessage } = useChat();
  const getLLMResponse = useLLM();
  const insets = useSafeAreaInsets();

  const handlePress = useCallback(async () => {
    const userMessage: Message = {
      id: randomUUID(),
      role: "user",
      content: prompt,
    };
    pushMessage(userMessage);

    const promptCopy = prompt;
    setPrompt("");
    const llmResponse = await getLLMResponse(promptCopy);
    pushMessage(llmResponse);
  }, [getLLMResponse, prompt, pushMessage]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.inputRow}>
        <Input onChangeText={setPrompt} value={prompt}>
          <Button onPress={handlePress} style={styles.button} />
        </Input>
      </View>
      <MistakesNotice />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 0,
  },
  container: {
    paddingHorizontal: 24,
    width: "100%",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
});
