import { Color } from "@/utils/style";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

const Loader = () => {
  const intervalRef = useRef<number>(null);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      setEndX((prev) => Math.max(0.2, (prev + 0.015) % 1.5));
    }, 32);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <Animated.View
      entering={SlideInDown.duration(300).delay(500)}
      style={styles.container}
    >
      <MaskedView
        maskElement={<Text style={styles.text}>AI is thinking...</Text>}
      >
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: endX, y: 0.5 }}
          colors={[Color.foregroundPrimary, Color.border]}
          style={{ width: 128, height: 20 }}
        />
      </MaskedView>
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
    fontWeight: "500",
    lineHeight: 20,
  },
});
