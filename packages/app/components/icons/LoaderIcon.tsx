import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

const LoaderIcon = ({ color }: IconProps) => {
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
      className="lucide lucide-loader-circle-icon lucide-loader-circle"
    >
      <Path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Svg>
  );
};

export default LoaderIcon;
