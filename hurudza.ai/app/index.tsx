import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TypeWriter from 'react-native-typewriter';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const phrases = [
  'Empowering African farmers...',
  'AI for Smart Agriculture.',
  'Predict. Grow. Harvest.',
  'Tech that speaks your language.',
];

type RootStackParamList = {
  Home: undefined;
};

const IndexPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[tw`flex-1 px-6 justify-center relative`, { backgroundColor: '#EEF2F5' }]}>
      {/* Centered Content */}
      <View style={tw`items-center`}>
        {/* TypeWriter for Welcome Text */} <Text></Text>
        <TypeWriter
          typing={1}
          maxDelay={40}
          style={tw`text-4xl font-bold text-center text-gray-900`}
        >
           <Text style={{ color: '#32CD32' }}>Hello Farmer 👋</Text>
        </TypeWriter>

        {/* Rotating Phrase */}
        <Text style={[tw`text-3xl font-bold text-center`, { color: '#32CD32' }]}>
  Welcome to Hurudza AI
</Text>
<Text style={[tw`text-sm mt-1 font-bold text-center`, { color: '#32CD32' }]}>Smart solutions for agriculture problems</Text>

        {/* Description */}
      
      </View>

      {/* Button at Bottom */}
      <View style={tw`absolute bottom-10 w-full items-center`}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            colors={['#38a169', '#a3e635']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`w-[80%] py-4 rounded-xl shadow-md`}
          >
            <Text style={tw`text-white mx-2 font-bold text-center text-base`}>
              Explore Hurudza AI→
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexPage;
