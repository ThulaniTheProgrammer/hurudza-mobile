import { ScrollView, StyleSheet, View } from "react-native";
import tw from "twrnc";
import { Chart } from "../Components/Chart";
import Footer from "../Components/Footer";
import MainHeader from "../Components/Header";
import Market from "../Components/Market";
import SmartFeatures from "../Components/SmartFeatures";
import Weather from "../Components/Weather";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={tw`bg-white`} contentContainerStyle={styles.scrollContent}>
        <View style={tw`mx-4 `}>
          <MainHeader />
       
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
