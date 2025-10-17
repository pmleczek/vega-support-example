import useLLM from "@/hooks/useLLM";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "./Button";
import Input from "./Input";
import MistakesNotice from "./MistakesNotice";
import type { BottomBarProps } from "./types";

const BottomBar = ({ setIndexState }: BottomBarProps) => {
  const [prompt, setPrompt] = useState<string>("");
  const getLLMResponse = useLLM();
  const insets = useSafeAreaInsets();

  const handlePress = useCallback(async () => {
    setIndexState({ loading: true, response: "" });

    const promptCopy = prompt;
    setPrompt("");
    const llmResponse = await getLLMResponse(promptCopy);

    setIndexState({ loading: false, response: llmResponse.content });
  }, [getLLMResponse, prompt, setIndexState]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.inputRow}>
        <Input onChangeText={setPrompt} value={prompt} />
        <Button onPress={handlePress} />
      </View>
      <MistakesNotice />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
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
