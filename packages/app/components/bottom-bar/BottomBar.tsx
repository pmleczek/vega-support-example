import useStreamLLMResponse from "@/hooks/useStreamLLMResponse";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "./Button";
import Input from "./Input";
import MistakesNotice from "./MistakesNotice";
import useAppState from "@/hooks/useAppState";

const BottomBar = () => {
  const [prompt, setPrompt] = useState<string>("");
  const streamResponse = useStreamLLMResponse();
  const insets = useSafeAreaInsets();
  const { streaming } = useAppState();

  const handlePress = useCallback(async () => {
    streamResponse(prompt);
    setPrompt("");
  }, [prompt, streamResponse]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.inputRow}>
        <Input disabled={streaming} onChangeText={setPrompt} value={prompt}>
          <Button disabled={streaming} onPress={handlePress} style={styles.button} />
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
