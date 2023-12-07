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


const Menu = () => {
  const navigation = useNavigation()
  const handleIconPress = (iconName) => {
    // Handle icon press logic here
    console.log(`Pressed ${iconName} icon`);
    // Perform different actions based on which icon is pressed
  };

  return (
    <View className=' justify-center items-center '>
      <View className ='w-full bg-pink-500 p-4 flex-row justify-around absolute bottom-0'>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
         <AntDesign name="home" size={34} color="black" />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Chat')} className="items-center">
         <Ionicons name="chatbubble-ellipses-outline" size={34} color="pink" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Connect')}  className="items-center">
         <MaterialCommunityIcons name="bluetooth" size={34} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('News')}  className="items-center">
         <Entypo name="news" size={34} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

