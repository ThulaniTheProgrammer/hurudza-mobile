import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  { supplier: "Seedco", location: "Dombwe", contact: "0774415338", price: "$35.00" },
  { supplier: "Mai Anna", location: "Msengezi", contact: "0774415338", price: "$32.00" },
  { supplier: "Dhlamini Srot", location: "Hwaze", contact: "0774415338", price: "$30.00" },
];

export default function Market() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(item =>
    item.supplier.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={tw`p-4 mt-20`}>
      <View style={tw`flex flex-row justify-between pb-3`}>
      
        <TextInput
          placeholder="Compound D"
          value={query}
          onChangeText={setQuery}
          style={tw`bg-green-500 px-3 py-1 rounded-md w-40 text-sm border border-gray-300`}
        />
         <Text style={tw`text-green-700 text-sm`}>View all</Text>
      </View>

      <ScrollView horizontal>
        <View>
          {/* Table Header */}
          <View style={tw`flex-row bg-gray-200 p-1`}>
            <Text style={tw`w-32 font-bold`}>Supplier</Text>
            <Text style={tw`w-32 font-bold`}>Contact</Text>
            <Text style={tw`w-20 font-bold`}>Price</Text>
          </View>

          {/* Table Rows */}
          {filteredData.map((item, index) => (
            <View key={index} style={tw`flex-row border-gray-300 p-1`}>
              <Text style={tw`w-32`}>{item.supplier}</Text>
              <Text style={tw`w-32`}>{item.contact}</Text>
              <Text style={tw`w-20`}>{item.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
