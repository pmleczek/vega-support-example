import useChat from "@/hooks/useChat";
import { randomUUID } from "expo-crypto";
import { useCallback, useEffect, useRef } from "react";
import useLLM from "./useLLM";
import useAppState from "./useAppState";

const useStreamLLMResponse = () => {
  const updateRef = useRef<string>("");
  const timeoutRef = useRef<number>(null);

  const { setLoading } = useAppState();
  const getResponseReader = useLLM();
  const { pushChunksToLastMessage, pushMessage } = useChat();

  useEffect(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const streamThrottledUpdates = useCallback(() => {
    const chunks = updateRef.current;
    updateRef.current = "";
    pushChunksToLastMessage(chunks);

    if (updateRef.current?.endsWith("\uFFFF") && timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [pushChunksToLastMessage]);

  const streamLLMResponse = useCallback(
    async (prompt: string) => {
      setLoading(true);
      pushMessage({
        id: randomUUID(),
        role: "user",
        content: prompt,
      });

      const reader = await getResponseReader(prompt);
      if (!reader) {
        return;
      }

      pushMessage({
        id: randomUUID(),
        role: "assistant",
        content: "",
      });

      timeoutRef.current = setInterval(streamThrottledUpdates, 75);

      let done = false;
      const textDecoder = new TextDecoder();
      setLoading(false);

      try {
        while (!done) {
          // @ts-ignore
          const response = await reader.read();
          done = response.done;
          if (response.value) {
            const chunk = JSON.parse(textDecoder.decode(response.value));
            if ("message" in chunk) {
              const message = chunk["message"];
              if (!("content" in message) || message["content"] === "") {
                continue;
              }

              updateRef.current += message["content"];
            }

            if ("done" in chunk && chunk["done"]) {
              updateRef.current += "\uFFFF";
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    },
    [getResponseReader, pushMessage, setLoading, streamThrottledUpdates]
  );

  return streamLLMResponse;
};

export default useStreamLLMResponse;
