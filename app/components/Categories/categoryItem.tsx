import { ProductItemInterface } from "@/app/commonTypes";
import { Colors } from "@/app/constants/Colors";
import { Pressable, StyleSheet, Text } from "react-native";

export default function CategoryItem({
  item,
  touchedId,
  settouchedId,
}: {
  item: ProductItemInterface;
  touchedId: number | null;
  settouchedId: any;
}) {
  return (
    <Pressable
      onPress={() => settouchedId(item?.category.id)}
      style={[
        styles.rectangle,
        {
          backgroundColor:
            touchedId === item?.category?.id
              ? Colors.lightGrey4
              : "transparent",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              touchedId === item?.category?.id ? Colors.white : Colors.black,
          },
        ]}
      >
        {item.category.name}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
  },
  rectangle: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderWidth: 0.8,
  },
  text: {
    fontWeight: "400",
  },
  heading: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "900",
    marginTop: 18,
    color: Colors.lightGrey4,
  },
});
