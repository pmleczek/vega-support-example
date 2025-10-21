import { Line, Polyline, Svg } from "react-native-svg";
import type { IconProps } from "./types";

const ArrowUpIcon = ({ color }: IconProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Line x1="12" y1="19" x2="12" y2="5" />
      <Polyline points="5 12 12 5 19 12" />
    </Svg>
  );
};

export default ArrowUpIcon;
