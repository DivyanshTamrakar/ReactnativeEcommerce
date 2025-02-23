import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="auto" backgroundColor="#C3C3C3" translucent={false} />
    </>
  );
}
