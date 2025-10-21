import { randomUUID } from "expo-crypto";
import { useCallback } from "react";
import { Platform } from "react-native";
import type { LLMRequest, Message, MessageInput } from "../types";

type ReturnType =
  | ReadableStreamReader<Uint8Array<ArrayBuffer>>
  | Message
  | undefined;

const useLLM = () => {
  const getLLMResponse = useCallback(
    async (message: string, stream: boolean = true): Promise<ReturnType> => {
      let fetchFn = fetch;
      // @ts-ignore - 'kepler' doesn't have overlap with default platforms
      if (Platform.OS !== "kepler") {
        fetchFn = require("expo/fetch").fetch;
      }

      const input: MessageInput = {
        role: "user",
        content: message,
      };

      const body: LLMRequest = {
        model: "qwen3:4b",
        messages: [input],
        stream,
      };

      try {
        const response = await fetchFn("http://localhost:11434/api/chat", {
          method: "POST",
          body: JSON.stringify(body),
        });

        if (stream) {
          const reader = response.body?.getReader();
          return reader;
        }

        const responseJSON = await response.json();

        return {
          role: "assistant",
          content: responseJSON.message.content,
          id: randomUUID(),
        };
      } catch (error: unknown) {
        console.log("LLM call Error");
        console.log(error);
        return undefined;
      }
    },
    []
  );

  return getLLMResponse;
};

export default useLLM;
