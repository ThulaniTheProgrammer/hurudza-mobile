
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

 export default function MainHeader() { 
  return (
    <View style={tw`flex flex-row mt-4 justify-between`}>
<View>
<SimpleLineIcons name="menu" size={24} color="black" />
</View>
<View>
    <Text style={tw`text-black text-green-600 text-2xl font-bold`}>Hurudza AI</Text>
</View>
<View style={tw`bg-green-100 w-10 h-10 flex items-center justify-center rounded-full `}>
<Ionicons name="person" size={24} color="black" />
</View>
    </View>
  );}