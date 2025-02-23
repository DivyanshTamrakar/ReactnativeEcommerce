import { StyleSheet, Text, View } from "react-native";

export default function NoDataFound() {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>No Data Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },
});
