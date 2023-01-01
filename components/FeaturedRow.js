import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <ArrowRightIcon />
      </View>
    </View>
  );
};

export default FeaturedRow;