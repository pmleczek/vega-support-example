import { Color } from "@/utils/style";
import { StyleSheet } from "react-native";

const markdownStyles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 28,
  },
  heading1: {
    fontWeight: "700",
    marginVertical: 18,
    fontSize: 32,
    lineHeight: 38,
  },
  heading2: {
    fontWeight: "700",
    marginVertical: 16,
    fontSize: 26,
    lineHeight: 32,
  },
  heading3: {
    fontWeight: "700",
    marginVertical: 14,
    fontSize: 21,
    lineHeight: 28,
  },
  heading4: {
    fontWeight: "700",
    marginVertical: 12,
    fontSize: 19,
    lineHeight: 26,
  },
  heading5: {
    fontWeight: "700",
    marginVertical: 12,
    fontSize: 18,
    lineHeight: 24,
  },
  heading6: {
    fontWeight: "700",
    marginVertical: 12,
    fontSize: 16,
    lineHeight: 22,
  },
  hr: {
    backgroundColor: Color.borderSecondary,
    height: 1,
    marginVertical: 24,
  },
  blockquote: {
    backgroundColor: Color.backgroundSecondary,
    borderColor: Color.border,
    paddingLeft: 16,
    marginTop: 12,
  },
  bullet_list_icon: {
    color: Color.foregroundPrimary,
  },
  ordered_list_icon: {
    color: Color.foregroundPrimary,
  },
  code_inline: {
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: Color.backgroundSecondary,
    borderRadius: 8,
    color: Color.foregroundSecondary,
  },
  fence: {
    backgroundColor: Color.backgroundSecondary,
    borderWidth: 0,
    borderRadius: 8,
    color: Color.foregroundSecondary,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  table: {
    borderColor: Color.border,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  tr: {
    borderColor: Color.border,
  },
  th: {
    backgroundColor: Color.backgroundSecondary,
    borderRightWidth: 1,
    borderColor: Color.border,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  td: {
    borderColor: Color.border,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRightWidth: 1,
  },
  text: {
    color: Color.foregroundPrimary,
  },
});

export default markdownStyles;
