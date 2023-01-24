import {  SafeAreaView,View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { useEffect, useState } from 'react';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispath = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {} );

    setGroupedItemsInBasket(groupedItems);
  },[items])

  console.log(groupedItemsInBasket);

  return (
    <SafeAreaView className="pt-10">
     <View>
      <View>
        <View>
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400">Nandos</Text>
        </View>
        <View>
          <Text>Test</Text>
        </View>
      </View>
     </View>
    </SafeAreaView>
  )
}

export default BasketScreen