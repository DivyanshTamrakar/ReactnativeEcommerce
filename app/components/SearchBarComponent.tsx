import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // If using Expo, otherwise use react-native-vector-icons
import { Colors } from "../constants/Colors";

type Props = {
  value: string;
  onChangeText: () => void;
  placeholder: string;
};

const SearchBar: FC<Props> = ({
  value,
  onChangeText,
  placeholder = "Search in Shopping kart Store..",
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={Colors.lightGrey}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGrey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.background, // Gray background
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: Colors.lightGrey5,
    paddingHorizontal: 15,
    height: 40,
    marginHorizontal: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.lightGrey5, // Ensure input text appears in red
  },
});

export default SearchBar;
