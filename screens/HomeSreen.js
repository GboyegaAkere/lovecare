import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import { Entypo } from '@expo/vector-icons';
import Menu from './Menu';


const HomeScreen = () => {
  const navigation = useNavigation()
  const handleIconPress = (iconName) => {
    // Handle icon press logic here
    console.log(`Pressed ${iconName} icon`);
    // Perform different actions based on which icon is pressed
  };

  return (
    <View className='flex-1 justify-center items-center bg-black'>
      {/* Your other content here */}
        
      {/* Bottom navigation */}
      <WelcomeScreen/>
      <Menu/>
    </View>
  );
};

export default HomeScreen;

