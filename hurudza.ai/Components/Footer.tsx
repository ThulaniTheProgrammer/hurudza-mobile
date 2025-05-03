import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Plant: undefined;
  Marketplace: undefined;
  Partners: undefined;
};

export default function Footer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={tw`mx-1 my-1`}>
      <View style={tw`absolute bottom-0 left-0 right-0 z-50`}>
        <View
          style={tw`flex-row justify-between items-center bg-white h-16 px-4 rounded-3xl shadow-md`}
        >
          <TouchableOpacity style={tw`items-center`} onPress={() => navigation.navigate("Home")}>
            <AntDesign name="home" size={24} color="green" />
            <Text style={tw`text-green-600 text-xs mt-1`}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`items-center`} onPress={() => navigation.navigate("Plant")}>
            <EvilIcons name="camera" size={28} color="green" />
            <Text style={tw`text-green-600 text-xs mt-1`}>Plant</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`items-center`}
            onPress={() => navigation.navigate("Marketplace")}
          >
            <Feather name="bar-chart" size={24} color="green" />
            <Text style={tw`text-green-600 text-xs mt-1`}>Marketplace</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`items-center`}
            onPress={() => navigation.navigate("Partners")}
          >
            <MaterialCommunityIcons
              name="account-group-outline"
              size={24}
              color="green"
            />
            <Text style={tw`text-green-600 text-xs mt-1 text-center`}>
              Get partners
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
