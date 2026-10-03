import { images, offers } from "@/constants";
import cn from "clsx";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment } from "react/jsx-runtime";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row",
                )}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#ffffff22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        className="size-full"
                        source={item.image}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      className={cn(
                        "offer-card_info",
                        isEven ? "pl-8" : "pr-8",
                      )}
                    >
                      <Text
                        className="h1-bold text-white leading-tight"
                        numberOfLines={3} 
                      >
                        {item.title}
                      </Text>

                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
      />
    </SafeAreaView>
  );
}
