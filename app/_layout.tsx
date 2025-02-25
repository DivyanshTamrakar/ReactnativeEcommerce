import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./constants/Colors";
import ProductContexProvider from "./context/productContextProvider";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  return (
    <>
      <ClerkProvider publishableKey={publishableKey}>
        <ClerkLoaded>
          <ProductContexProvider>
            <Stack initialRouteName="index">
              <Stack.Screen
                name="signIn"
                options={{ title: "SignIn", headerShown: false }}
              />
              <Stack.Screen
                name="home"
                options={{ title: "Home", headerShown: false }}
              />
              <Stack.Screen
                name="index"
                options={{ title: "index", headerShown: false }}
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
          </ProductContexProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
