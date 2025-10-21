import { randomUUID } from "expo-crypto";
import { useCallback } from "react";
import type { Message } from "../types";
import useAppState from "./useAppState";
import useChat from "./useChat";
import useLLM from "./useLLM";

const useStreamLLMResponse = () => {
  const { setLoading, setStreaming } = useAppState();
  const getLLMResponse = useLLM();
  const { pushMessage } = useChat();

  const streamLLMResponse = useCallback(async (prompt: string) => {
    setLoading(true);
    setStreaming(true);

    pushMessage({
      id: randomUUID(),
      role: "user",
      content: prompt,
    });

    const response = (await getLLMResponse(prompt, false)) as Message;
    setLoading(false);
    setStreaming(false);
    pushMessage(response);
  }, []);

  return streamLLMResponse;
};

export default useStreamLLMResponse;
