import { Chart } from "@/Components/Chart";
import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Header";
import Market from "@/Components/Market";
import Message from "@/Components/Message";
import SmartFeatures from "@/Components/SmartFeatures";
import Weather from "@/Components/Weather";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import tw from "twrnc";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={tw`bg-white`} contentContainerStyle={styles.scrollContent}>
        <View style={tw`mx-4 `}>
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
