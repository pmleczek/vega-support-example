export interface ButtonProps {
  onPress: () => void;
}

export interface InputProps {
  onChangeText: (text: string) => void;
  value: string;
}
