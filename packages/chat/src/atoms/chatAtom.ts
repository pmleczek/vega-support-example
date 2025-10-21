import { atom } from "jotai";
import type { ChatAtomType } from "./types";

const chatAtom = atom<ChatAtomType>({
  messages: [],
});

export default chatAtom;
