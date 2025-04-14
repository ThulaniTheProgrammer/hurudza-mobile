import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
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



export default function Marketplace() {
  return (
    <View  style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
       <View >
        <View  style={tw`mx-4`} >
          <MainHeader />
         <Order />
            <SearchProduct />
           
            <MarketItems />
            <Product />
      
      
         
        </View>
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
    paddingBottom: 100, // Give room for footer so it's not covered
  },
});
