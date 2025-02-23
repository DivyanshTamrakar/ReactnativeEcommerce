import { ActivityIndicator } from "react-native";

export default function ActivityLoader() {
  return (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}
