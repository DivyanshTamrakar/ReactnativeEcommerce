import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SignInScreen from "./signIn";
import { Colors } from "./constants/Colors";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
  },
});
