import Markdown from "react-native-markdown-display";
import markdownStyles from "./style";
import type { AssistantMessageProps } from "./types";

const AssistantMessage = ({ message }: AssistantMessageProps) => {
  return <Markdown style={markdownStyles}>{message}</Markdown>;
};

export default AssistantMessage;
