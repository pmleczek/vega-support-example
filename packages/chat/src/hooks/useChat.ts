import chatAtom from "../atoms/chatAtom";
import type { Message } from "../types";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";

const useChat = () => {
  const [atomValue, setAtom] = useAtom(chatAtom);

  const pushMessage = useCallback(
    (message: Message) => {
      setAtom((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    },
    [setAtom]
  );

  const pushChunksToLastMessage = useCallback(
    (chunks: string) => {
      setAtom((prev) => {
        const lastMessage = prev.messages.at(-1);
        if (!lastMessage || !chunks) {
          return prev;
        }

        return {
          ...prev,
          messages: [
            ...prev.messages.slice(0, -1),
            {
              ...lastMessage,
              content: lastMessage.content + chunks,
            },
          ],
        };
      });
    },
    [setAtom]
  );

  const messages = useMemo(() => {
    return atomValue.messages.filter((message) => message.content);
  }, [atomValue]);

  return { messages, pushChunksToLastMessage, pushMessage };
};

export default useChat;
