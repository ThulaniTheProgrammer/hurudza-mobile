import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import MainHeader from "@/Components/Header";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Weather() {
 
  return (
    <View style={tw`flex mb-4 bg-white h-64  rounded-xl `}>
   
      <View style={tw`rounded-2xl flex  flex-row items-center mx-2 px-2 justify-between pt-10  bg-white`}>
       
       <View  style={tw`w-2/3 `}>
        <Text style={tw`font-bold`}>Mashonaland West</Text>
        <Text  style={tw`mb-8 pr-10`}>We are expecting an average rainfall 
of 20mm and it will be best to plant 
from 8 crops like maize and from 
13 April you can harvest and put beans </Text>
       
       </View>
       <View style={tw`bg-green-500 rounded-2xl mt-8 h-10 w-28 justify-center items-center`}>
        <Text style={tw`text-white`}>View Analytics</Text>
       </View>
       

   
        
      </View>
      <View style={tw`flex-1 justify-center items-center`}>
      <View
  style={[
    tw`rounded-full bg-white h-10 w-10 justify-center items-center absolute`,
    { zIndex: 1 }
  ]}
>
  {/* Optional icon or text inside the circle */}
</View>
      </View>
      <View style={tw`h-20 mb-16 rounded-2xl flex flex-row px-2 justify-between text-white items-center bg-green-500`}>

<View>
    <Text style={tw`py-2 text-white `}>Soil temperature </Text>
    <FontAwesome name="thermometer-half" size={24} color="white" />
    <Text style={tw`font-bold absolute text-white  top-8 right-10 text-xl`}>10 °C</Text>
   
</View>

<View style={tw`w-28`}>
    <Text style={tw`py-2 text-white  `}>Percipitation</Text>
    <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
    <Text style={tw`font-bold absolute top-8 right-10 text-xl text-white  pl-12`}>20%</Text>
   
</View>

      </View>
    </View>
  );
}
