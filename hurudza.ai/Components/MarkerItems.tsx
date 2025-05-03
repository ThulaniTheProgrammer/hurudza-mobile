import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function MarketItems() {
  return (
    <View style={tw`flex flex-row justify-between`}>
      <View style={tw`bg-green-200 px-2 py-2 rounded-lg`}>
        <Text style={[tw`text-sm`, { fontFamily: 'RobotoSlab-Medium' }]}>
          All Products
        </Text>
      </View>
      <View style={tw`bg-green-200 px-2 py-2 rounded-lg`}>
        <Text style={[tw`text-sm`, { fontFamily: 'RobotoSlab-Medium' }]}>
          Inputs
        </Text>
      </View>
      <View style={tw`bg-green-200 px-2 py-2 rounded-lg`}>
        <Text style={[tw`text-sm`, { fontFamily: 'RobotoSlab-Medium' }]}>
          Equipments
        </Text>
      </View>
    </View>
  );
}
