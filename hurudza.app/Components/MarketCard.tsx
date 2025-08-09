
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
 export default function MarketCard() { 
  return (
    <View>
<View style={tw`rounded-xl mt-8 w-full h-40 bg-green-100`} >
<Text  style={tw`mx-4 rounded-xm text-2xl w-full h-20 text-gray-600 font-bold`} >Meet with load borrowers and investors</Text>

<View style={tw`flex flex-row mx-2 justify-between`}>
    <View>
<Text  style={tw`text-black`}>You owe zb Bank</Text>
    </View>
    <View>
        <Text style={tw`text-2xl text-black font-bold`}>$100.00</Text>
    </View>
</View>

</View>

    </View>
  );}
