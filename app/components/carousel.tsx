import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

function CarouselSlider({ imagesArray = [] }: { imagesArray?: string[] }) {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View
      style={{
        height: height / 2,
        width: width,
      }}
    >
      <Carousel
        ref={ref}
        width={width}
        height={height / 1.8} // Adjusted height to fit within half screen
        data={imagesArray}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent)
              }
            />
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={imagesArray}
        dotStyle={{
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 50,
          height: 5,
          width: 4,
        }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default CarouselSlider;
