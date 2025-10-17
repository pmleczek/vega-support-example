type Role = "assistant" | "user";

export interface MessageInput {
  role: "user";
  content: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
}

export interface LLMRequest {
  model: string;
  messages: MessageInput[];
  stream: boolean;
  format?: string;
}

export interface IndexState {
  loading: boolean;
  response: string;
}
