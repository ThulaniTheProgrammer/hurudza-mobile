
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
 export default function PartnerItems() { 
  return (
    <View style={tw`flex flex-row mt-5 justify-between`}>
<View style={tw`bg-green-200 px-2  py-2 rounded-lg `}>
    <Text style={tw`text-sm`}>Banks</Text>
</View>
<View style={tw`bg-green-200 px-2  py-2 rounded-lg `}>
    <Text style={tw`text-sm `}>Microfinance</Text>
</View>
<View style={tw`bg-green-200 px-2  py-2 rounded-lg `}>
    <Text style={tw`text-sm `}>Government</Text>
</View>
<View style={tw`bg-green-200 px-2  py-2 rounded-lg `}>
    <Text style={tw`text-sm `}>NGO's</Text>
</View>

    </View>
  );}
