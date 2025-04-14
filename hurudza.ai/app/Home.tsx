import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import MainHeader from "@/Components/Header";
import Message from "@/Components/Message";
import Weather from "@/Components/Weather";
import Market from "@/Components/Market";
import Footer from "@/Components/Footer";
import { Chart } from "@/Components/Chart";
import SmartFeatures from "@/Components/SmartFeatures";
import MarketItems from "@/Components/MarkerItems";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={tw`mx-4`}>
          <MainHeader />
          <Message />
          <Weather />
          <Chart />
          <Market />
          <SmartFeatures />
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
