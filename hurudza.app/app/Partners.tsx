import { ScrollView, StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Footer from "../Components/Footer";
import MainHeader from "../Components/Header";
import MarketCard from "../Components/MarketCard";
import PartnerItems from "../Components/PartnerItems";



export default function Marketplace() {
  return (
    <View  style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
       <View >
        <View  style={tw`mx-4`} >
          <MainHeader />
          <MarketCard />
          <PartnerItems/>
       
      
         
        </View>
        </View>
      </ScrollView>
    <Footer/>
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
