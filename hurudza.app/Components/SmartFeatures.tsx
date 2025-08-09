import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function SmartFeatures() { 
  return (
    <View style={tw`mt-4`}>
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold text-gray-800`}>Smart Features</Text>
        <Text style={tw`text-sm text-gray-500`}>AI-powered agricultural solutions</Text>
      </View>
      
      <View style={tw`flex flex-col justify-between`}>
        {/* Disease Prediction Card */}
        <TouchableOpacity style={tw`w-full mb-4`}>
          <LinearGradient
            colors={['#4ade80', '#22c55e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`rounded-xl p-4 h-40`}
          >
            <View style={tw`flex-row items-center mb-2`}>
              <View style={tw`bg-white/20 p-2 rounded-lg`}>
                <FontAwesome5 name="virus" size={24} color="white" />
              </View>
              <Text style={tw`text-white font-bold ml-2`}>Disease Prediction</Text>
            </View>
            <Text style={tw`text-white/90 text-sm mb-2`}>
              Upload plant images to detect diseases early and get treatment recommendations
            </Text>
            <View style={tw`flex-row items-center mt-auto`}>
              <Text style={tw`text-white font-semibold`}>Try Now</Text>
              <MaterialCommunityIcons name="arrow-right" size={20} color="white" style={tw`ml-1`} />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Fertilizer Recommendation Card */}
        <TouchableOpacity style={tw`w-[48%]`}>
          <LinearGradient
            colors={['#34d399', '#059669']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`rounded-xl p-4 h-40`}
          >
            <View style={tw`flex-row items-center mb-2`}>
              <View style={tw`bg-white/20 p-2 rounded-lg`}>
                <FontAwesome5 name="seedling" size={24} color="white" />
              </View>
              <Text style={tw`text-white font-bold ml-2`}>Fertilizer Guide</Text>
            </View>
            <Text style={tw`text-white/90 text-sm mb-2`}>
              Get personalized fertilizer recommendations based on your soil and crop type
            </Text>
            <View style={tw`flex-row items-center mt-auto`}>
              <Text style={tw`text-white font-semibold`}>Try Now</Text>
              <MaterialCommunityIcons name="arrow-right" size={20} color="white" style={tw`ml-1`} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
