import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: "Testing",
    })
  },[]);
  return (
    <View>
      <Text className='text-red-500 mt-2'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen