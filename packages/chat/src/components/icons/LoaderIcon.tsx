import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./types";

const LoaderIcon = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Svg>
  );
};

export default LoaderIcon;
