import { Color } from "../../utils/style";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { RobotIcon } from "../icons";

const Placeholder = () => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.iconContainer}
        entering={FadeIn.duration(400).delay(250)}
        exiting={FadeOut}
      >
        <RobotIcon color={Color.foregroundPrimary} size={80} />
      </Animated.View>
      <Animated.Text
        style={styles.text}
        entering={FadeIn.duration(400).delay(250)}
      >
        Use the input below to start chat
      </Animated.Text>
    </View>
  );
};

export default Placeholder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 32,
  },
  iconContainer: {
    backgroundColor: Color.border,
    borderRadius: 16,
    borderColor: Color.borderSecondary,
    borderWidth: 1,
    padding: 36,
  },
  text: {
    color: Color.foregroundPrimary,
    fontSize: 22,
    fontWeight: "700",
  },
});
