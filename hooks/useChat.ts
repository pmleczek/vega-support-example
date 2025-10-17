import chatAtom from "@/atoms/chatAtom";
import { Message } from "@/types";
import { useAtom } from "jotai";
import { useCallback } from "react";

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

  return { messages: atomValue.messages, pushMessage };
};

export default useChat;
