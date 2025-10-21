import { randomUUID } from "expo-crypto";
import { useCallback, useEffect, useRef } from "react";
import useChat from "../hooks/useChat";
import useAppState from "./useAppState";
import useLLM from "./useLLM";

const useStreamLLMResponse = () => {
  const updateRef = useRef<string>("");
  const timeoutRef = useRef<number | NodeJS.Timeout>(null);
  const finshedLoading = useRef<boolean>(false);

  const { setLoading, setStreaming } = useAppState();
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
    pushChunksToLastMessage(chunks.replace("\uFFFF", ""));

    if (chunks.endsWith("\uFFFF")) {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
        timeoutRef.current = null;
      }
      setStreaming(false);
    }
  }, [pushChunksToLastMessage, setStreaming]);

  const streamLLMResponse = useCallback(
    async (prompt: string) => {
      setLoading(true);
      setStreaming(true);
      finshedLoading.current = false;

      pushMessage({
        id: randomUUID(),
        role: "user",
        content: prompt,
      });

      const reader = (await getResponseReader(prompt)) as ReadableStreamReader<
        Uint8Array<ArrayBuffer>
      >;
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
                if ("done" in chunk && chunk["done"]) {
                  updateRef.current += "\uFFFF";
                }
                continue;
              }

              if (!finshedLoading.current) {
                finshedLoading.current = true;
                setLoading(false);
              }

              updateRef.current += message["content"];
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    },
    [
      getResponseReader,
      pushMessage,
      setLoading,
      setStreaming,
      streamThrottledUpdates,
    ]
  );

  return streamLLMResponse;
};

export default useStreamLLMResponse;
