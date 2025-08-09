import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import tw from "twrnc";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
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
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

export default function Marketplace() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
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
