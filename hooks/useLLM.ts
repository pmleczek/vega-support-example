import { randomUUID } from "expo-crypto";
import { useCallback } from "react";
import type { LLMRequest, Message, MessageInput } from "../types";

const useLLM = () => {
  const getLLMResponse = useCallback(
    async (message: string): Promise<Message> => {
      const input: MessageInput = {
        role: "user",
        content: message,
      };

      const body: LLMRequest = {
        model: "qwen3:4b",
        messages: [input],
        stream: false,
      };

      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const llmResponse = await response.json();

      return {
        role: "assistant",
        content: llmResponse.message.content,
        id: randomUUID(),
      };
    },
    []
  );

  return getLLMResponse;
};

export default useLLM;
