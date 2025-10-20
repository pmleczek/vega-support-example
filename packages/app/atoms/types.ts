import { Message } from "@/types";

export interface AppStateAtomType {
  loading: boolean;
  streaming: boolean;
}

export interface ChatAtomType {
  messages: Message[];
}