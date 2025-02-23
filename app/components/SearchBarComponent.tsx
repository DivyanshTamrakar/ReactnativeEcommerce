import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // If using Expo, otherwise use react-native-vector-icons

type Props = {
  value: string;
  onChangeText: () => void;
  placeholder: string;
};

const SearchBar: FC<Props> = ({
  value,
  onChangeText,
  placeholder = "Search products...",
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#808080", // Gray background
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black", // Ensure input text appears in red
  },
});

export default SearchBar;
