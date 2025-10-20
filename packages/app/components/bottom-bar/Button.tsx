import { Color } from "@/utils/style";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { ArrowUpIcon, LoaderIcon } from "../icons";
import type { ButtonProps } from "./types";

const Button = ({ disabled, onPress, style = {} }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}
    >
      {!disabled ? <ArrowIcon /> : <Loader />}
    </TouchableOpacity>
  );
};

const ArrowIcon = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300)}
    >
      <ArrowUpIcon color={Color.foregroundPrimary} />
    </Animated.View>
  );
};

const Loader = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1
    );

    return () => cancelAnimation(rotation);
    // eslint-disable-next-line
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value % 360}deg` }],
  }));

  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300)}
      style={animatedStyle}
    >
      <LoaderIcon color={Color.foregroundSecondary} />
    </Animated.View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.backgroundPrimary,
    borderColor: Color.borderSecondary,
    borderWidth: 1,
    borderRadius: 9999,
    height: 56,
    width: 56,
  },
  disabled: {
    backgroundColor: Color.backgroundSecondary,
  },
});
