import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./types";

const RobotIcon = ({ color, size = 24 }: IconProps) => {
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
      className="lucide lucide-bot-message-square-icon lucide-bot-message-square"
    >
      <Path d="M12 6V2H8" />
      <Path d="M15 11v2" />
      <Path d="M2 12h2" />
      <Path d="M20 12h2" />
      <Path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      <Path d="M9 11v2" />
    </Svg>
  );
};

export default RobotIcon;
