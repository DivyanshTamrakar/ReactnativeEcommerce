import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home',headerShown:false }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  )
}
