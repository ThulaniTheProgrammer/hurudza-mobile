import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const API_KEY = "58fdb7f7cb3f4db39a6142523250305";

export default function Weather() {
  const [weather, setWeather] = useState<any>(null);;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Mashonaland West`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("WeatherAPI Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={tw`justify-center items-center h-64`}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={tw`justify-center items-center h-64`}>
        <Text>Error fetching weather data.</Text>
      </View>
    );
  }

  const temp = weather.current.temp_c;
  const condition = weather.current.condition.text;
  const precip = weather.current.precip_mm;
  const icon = weather.current.condition.icon;

  return (
    <View style={tw`flex mb-4 bg-white h-64 rounded-xl`}>
      <View style={tw`rounded-2xl flex flex-row items-center mx-2 px-2 justify-between pt-10 bg-white`}>
        <View style={tw`w-2/3`}>
          <Text style={tw`font-bold`}>Mashonaland West</Text>
          <Text style={tw`text-sm mb-8 pr-10`}>
            Current weather: {condition}, {temp}°C.{"\n"}
            Precipitation: {precip} mm.
          </Text>
        </View>
        <View style={tw`bg-green-500 rounded-2xl mt-8 h-10 w-28 justify-center items-center`}>
          <Text style={tw`text-white`}>View Analytics</Text>
        </View>
      </View>

      <View style={tw`h-20 mb-16 mx-2 rounded-2xl flex flex-row px-2 justify-between items-center bg-green-500`}>
        <View>
          <Text style={tw`py-2 text-white`}>Temperature</Text>
          <FontAwesome name="thermometer-half" size={24} color="white" />
          <Text style={tw`font-bold absolute text-white top-8 left-6 text-sm`}>{temp} °C</Text>
        </View>

        <View style={tw`w-28`}>
          <Text style={tw`py-2 text-white`}>Precipitation</Text>
          <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
          <Text style={tw`font-bold absolute top-8 right-10 text-sm text-white pl-12`}>{precip} mm</Text>
        </View>
      </View>
    </View>
  );
}
