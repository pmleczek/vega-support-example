import type { IndexState } from "@/types";

export interface BottomBarProps {
  setIndexState: (update: Partial<IndexState>) => void;
}

export interface ButtonProps {
  onPress: () => void;
}

export interface InputProps {
  onChangeText: (text: string) => void;
  value: string;
}
