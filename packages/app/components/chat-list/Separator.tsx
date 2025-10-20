import React from "react";
import { StyleSheet, View } from "react-native";
import Loader from "./Loader";

const Separator = () => <View style={styles.container} />;

const WithLoader = () => (
  <>
    <Separator />
    <Loader />
    <Separator />
  </>
);

Separator.WithLoader = WithLoader;

export default Separator;

const styles = StyleSheet.create({
  container: {
    height: 20,
  },
});
