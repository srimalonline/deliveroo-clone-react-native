import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { StarIcon  } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
    const navigation = useNavigation();

    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    }} = useRoute();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[]);
  return (
    <ScrollView>
      <View className="relative">
        <Image
            source={{ 
                uri: urlFor(imgUrl).url()
             }}

             className="w-full h-56 bg-gray-300 p-4"
            />
            <TouchableOpacity onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                <ArrowLeftIcon size={20} color="#00CCBB"/>
            </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flew-row space-x-2 my-1"></View>
            <View>
                <StarIcon color="green" opacity={0.5} size={22} />
            </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen