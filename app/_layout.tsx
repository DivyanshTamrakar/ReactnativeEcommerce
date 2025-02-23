import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./constants/Colors";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="about"
          options={{ title: "About", headerShown: false }}
        />
      </Stack>
      <StatusBar
        style="dark"
        backgroundColor={Colors.light.background}
        translucent={false}
      />
    </>
  );
}
