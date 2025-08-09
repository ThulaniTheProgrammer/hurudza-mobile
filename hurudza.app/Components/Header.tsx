
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

 export default function MainHeader() { 
  return (
    <View style={tw`flex flex-row mt-4 justify-between`}>


<View style={tw`bg-white border border-green-500 w-10 h-10 flex items-center justify-center rounded-full `}>
<Ionicons name="person" size={24} color="green" />
</View>
    </View>
  );}