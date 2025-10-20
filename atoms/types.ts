import { Message } from "@/types";

export interface AppStateAtomType {
  loading: boolean;
}

export interface ChatAtomType {
  messages: Message[];
}