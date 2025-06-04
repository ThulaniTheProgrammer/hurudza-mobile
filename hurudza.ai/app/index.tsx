import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TypeWriter from 'react-native-typewriter';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import tw from 'tailwind-react-native-classnames';

const phrases = [
  'Empowering African farmers...',
  'AI for Smart Agriculture.',
  'Predict. Grow. Harvest.',
  'Tech that speaks your language.',
];

type RootStackParamList = {
  Home: undefined;
};

const loadFonts = () =>
  Font.loadAsync({
    'RobotoSlab-Medium': require('../assets/fonts/RobotoSlab-Medium.ttf'),
  });

const IndexPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      setTypewriterKey(prev => prev + 1);
    }, 3000); // Restart every 3 seconds

    return () => clearInterval(typewriterInterval);
  }, []);

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
    <View style={[tw`flex-1 mx-2 justify-center relative`, { backgroundColor: '#EEF2F5' }]}>
      {/* Centered Content */}
      <View style={tw`items-center`}>
        {/* TypeWriter Welcome Text */}
        <TypeWriter
          key={typewriterKey}
          typing={1}
          maxDelay={40}
          minDelay={20}
          style={{ fontFamily: 'RobotoSlab-Medium', fontSize: 30, textAlign: 'center', color: '#32CD32' }}
        >
          Hello Farmer 👋
        </TypeWriter>

        {/* Rotating Phrase */}
        <Text style={{ fontFamily: 'RobotoSlab-Medium', fontSize: 26, textAlign: 'center', color: '#32CD32', marginTop: 10 }}>
          Welcome to Hurudza AI
        </Text>

        <Text style={{ fontFamily: 'RobotoSlab-Medium', fontSize: 14, textAlign: 'center', color: '#32CD32', marginTop: 5 }}>
          Smart solutions for agriculture problems
        </Text>
      </View>

      {/* Button at Bottom */}
      <View style={tw`absolute bottom-10 w-full`}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            colors={['#38a169', '#a3e635']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`w-full py-4 rounded-xl shadow-md`}
          >
            <Text style={{ fontFamily: 'RobotoSlab-Medium', color: 'white', textAlign: 'center', fontSize: 16 }}>
              Explore Hurudza AI →
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexPage;
