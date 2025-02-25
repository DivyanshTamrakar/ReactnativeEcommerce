import { useAuth, useSSO, useUser } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Social icons
import { Colors } from "./constants/Colors";
import { router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const { startSSOFlow } = useSSO();
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);

  const onPress = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: "oauth_google",
          // Defaults to current path
          redirectUrl: AuthSession.makeRedirectUri(),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.replace("/home");
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo Placeholder */}
        <View style={styles.logo} />

        {/* Heading */}
        <Text style={styles.title}>Sign in to Shopping Kart</Text>
        <Text style={styles.subtitle}>
          Welcome back! Please sign in to continue
        </Text>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton} onPress={onPress}>
            <FontAwesome name="google" size={20} color={Colors.lightGrey3} />
          </Pressable>
        </View>

        <Text style={styles.orText}>or</Text>

        {/* Sign-Up Link */}
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>

        {/* Footer */}
        <Text style={styles.footer}>Secured by Knoxx</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: Colors.white,
    width: "90%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5, // For Android shadow

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    marginBottom: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  orText: {
    color: "#777",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#333",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signUpText: {
    color: "#777",
  },
  signUpLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 15,
    color: "#777",
    fontSize: 12,
  },
});
