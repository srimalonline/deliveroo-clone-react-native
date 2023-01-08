import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Curreny from 'react-currency-formatter'

const DishRow = ({
    id, name, description, price, image
}) => {
  return (
    <TouchableOpacity>
      <Text className="text-lg mb-1">{name}</Text>
      <Text className="text-gray-400">{description}</Text>
      <Text>
        <Curreny quantity={price} currency="LKR"/>
      </Text>
    </TouchableOpacity>
  )
}

export default DishRow