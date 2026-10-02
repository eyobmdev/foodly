import { offers } from "@/constants";
import { FlatList, Image, Pressable, View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment } from "react/jsx-runtime";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Pressable
                className="offer-card"
                style={{ backgroundColor: item.color }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image className="size-full" source={item.image} resizeMode="contain" />
                    </View>
                    <View >
                      <Text className="offer-card_info">
                        {item.title}
                      </Text>
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
