import { fetch } from "expo/fetch";
import { useCallback } from "react";
import type { LLMRequest, MessageInput } from "../types";

type ReturnType = ReadableStreamReader<Uint8Array<ArrayBuffer>> | undefined;

const useLLM = () => {
  const getLLMResponse = useCallback(
    async (message: string): Promise<ReturnType> => {
      const input: MessageInput = {
        role: "user",
        content: message,
      };

      const body: LLMRequest = {
        model: "qwen3:4b",
        messages: [input],
        stream: true,
      };

      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const reader = response.body?.getReader();

      return reader;
    },
    []
  );

  return getLLMResponse;
};

export default useLLM;
