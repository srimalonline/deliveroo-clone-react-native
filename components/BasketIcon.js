import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Curreny from "react-currency-formatter";

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
      <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
      <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
      <Text className="text-lg text-white font-extrabold">
        <Curreny quantity={basketTotal} currency="LKR"/>
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon