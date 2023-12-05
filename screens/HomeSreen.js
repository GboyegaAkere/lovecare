import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';


const HomeScreen = () => {
  const navigation = useNavigation()
  const handleIconPress = (iconName) => {
    // Handle icon press logic here
    console.log(`Pressed ${iconName} icon`);
    // Perform different actions based on which icon is pressed
  };

  return (
    <View className='flex-1 justify-center items-center bg-pink-900'>
      {/* Your other content here */}
        
      {/* Bottom navigation */}
      <WelcomeScreen/>
      <View className ='w-full bg-pink-500 p-4 flex-row justify-around absolute bottom-0'>
        <TouchableOpacity onPress={() => handleIconPress('Icon 1')} className="items-center">
         <AntDesign name="home" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('Icon 1')} className="items-center">
         <Ionicons name="chatbubble-ellipses-outline" size={34} color="pink" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('Icon 2')} className="items-center">
         <MaterialCommunityIcons name="bluetooth" size={34} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comments')}  className="items-center">
         <FontAwesome name="comments" size={34} color="yellow" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

