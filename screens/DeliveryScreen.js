import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1">
      <View className="z-50 p-5 pt-10">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity>
            <XCircleIcon color="white" height={50} width={50} />
          </TouchableOpacity>
          <Text className="text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">30-40 min</Text>
          </View>
          <Image
            source={{
              uri: "https://links.papareact.com/fls",
            }}
            className="h-20 w-20"
          />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
