import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainHeader from "@/Components/Header";
import Message from "@/Components/Message";
import Weather from "@/Components/Weather";
import Market from "@/Components/Market";
import Footer from "@/Components/Footer";
import { Chart } from "@/Components/Chart";
import Order from "@/Components/Order";
import SearchProduct from "@/Components/SearchProduct";
import MarketItems from "@/Components/MarkerItems";
import Product from "@/Components/Product";

// Load custom font
const loadFonts = () =>
  Font.loadAsync({
    "RobotoSlab-Medium": require("../assets/fonts/RobotoSlab-Light.ttf"),
  });

export default function Marketplace() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={tw`mx-4`}>
          <MainHeader />
          <Order />
          <SearchProduct />
          <MarketItems />
          <Product />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F5",
  },
  scrollContent: {
    paddingBottom: 100, // Room for the footer
  },
});
