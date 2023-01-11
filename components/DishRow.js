import { View, Text, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import Curreny from "react-currency-formatter";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity className="bg-white border p-4 border-gray-200" onPress={() =>        setIsPressed(true)}>
        <View className="flex-row ">
          <View className="flex-1 or-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text>
              <Curreny quantity={price} currency="LKR" />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View>
          <View>
            <TouchableOpacity onPress={()=> setIsPressed(false)}>
             <Text>
              {/* add + and - buttons to the coner */}
             </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
