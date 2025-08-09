import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import MainHeader from "@/Components/Header";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Order() {
 
  return (
    <View style={tw` mb-4 mt-4  `}>
   
      <View style={tw`rounded-2xl flex flex-row items-center  px-2 justify-between h-16 bg-green-100`}>
       
       <View>
        <Text style={tw`px-2`}>Post your produce and sell s</Text>
        
       </View>
       <View>
       <Ionicons name="cloud-upload-outline" size={24} color="black" />
       </View>
       

        
      </View>
    </View>
  );
}
