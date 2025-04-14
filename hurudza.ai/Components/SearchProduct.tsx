import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import MainHeader from "@/Components/Header";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


const data = [
    { supplier: "Seedco", location: "Dombwe", contact: "0774415338", price: "$35.00" },
    { supplier: "Mai Anna", location: "Msengezi", contact: "0774415338", price: "$32.00" },
    { supplier: "Dhlamini Srot", location: "Hwaze", contact: "0774415338", price: "$30.00" },
  ];
  

export default function SearchProduct() {
     const [query, setQuery] = useState("");
    
      const filteredData = data.filter(item =>
        item.supplier.toLowerCase().includes(query.toLowerCase())
      );
 
  return (
    <View style={tw` mb-4  `}>
   
   <TextInput
          placeholder="Compound D"
          value={query}
          onChangeText={setQuery}
          style={tw`bg-white h-12 rounded-md `}
        />
    </View>
  );
}
