import {  View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { useEffect } from 'react';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  cont [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
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
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen