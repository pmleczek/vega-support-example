import { Color } from "@/utils/style";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  cancelAnimation,
  SlideInDown,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const Constants = {
  CIRCLE_SIZE: 10,
  DURATION: 350,
} as const;

const pulse = withSequence(
  withTiming(1.25, { duration: Constants.DURATION }),
  withTiming(1, { duration: Constants.DURATION }),
  withTiming(1, { duration: 2 * Constants.DURATION })
);

const Loader = () => {
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);

  useEffect(() => {
    scale1.value = withRepeat(pulse, -1);
    scale2.value = withDelay(Constants.DURATION + 100, withRepeat(pulse, -1));
    scale3.value = withDelay(
      Constants.DURATION * 2 + 100,
      withRepeat(pulse, -1)
    );

    return () => {
      cancelAnimation(scale1);
      cancelAnimation(scale2);
      cancelAnimation(scale3);
    };
  });

  return (
    <Animated.View
      entering={SlideInDown.duration(300)}
      style={styles.container}
    >
      <Animated.Text style={[styles.text]}>AI is thinking...</Animated.Text>
    </Animated.View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  text: {
    color: Color.foregroundSecondary,
    fontSize: 16,
    fontWeight: '500',
  },
});
