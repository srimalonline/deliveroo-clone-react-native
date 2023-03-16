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
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1">
      <View className="z-50 p-5 pt-10">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={ () => navigation.navigate("Home")}>
            <Text className="text-2xl text-white">X</Text>
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
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </View>
      <MapView
        initialRegion={{
            // latitude: restaurant.lat,
            latitude: 6.927079,
            // longitude: restaurant.long,
            longitude:  79.861244,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
        >
      <Marker 
        coordinate={{ 
            latitude: 6.927079,
            longitude:  79.861244
         }}
         title={restaurant.title}
         description={restaurant.short_description}
         identifier="origin"
         pinColor="#00CCBB"
      />
      </MapView>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
