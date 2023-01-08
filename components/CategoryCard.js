import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 bg-orange-600">
        <Image
            // source={{
            //     uri: urlFor(imgUrl).url(),
            // }}
            className="h-20 w-20 rounded"/>
        <Text className="absolute bottom-1 left-1 text-white font-bold">
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;