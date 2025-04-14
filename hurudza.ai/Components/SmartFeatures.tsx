
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
 export default function SmartFeatures() { 
  return (
    <View>
<View>
    <Text style={tw`text-lg font-bold`}>Smart Features</Text>
</View>
<View style={tw`flex flex-row  `}>
    <View style={tw`rounded-lg bg-white p-4  mt-2 w-1/2 h-40`}>

    </View>
    <View style={tw`rounded-lg mx-2 bg-white p-4 mt-2 w-1/2 h-40`}>

    </View>
</View>
    </View>
  );}
