import { atom } from "jotai";
import { ChatAtomType } from "./types";

const chatAtom = atom<ChatAtomType>({
  messages: [],
});

export default chatAtom;
