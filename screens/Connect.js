import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from './Menu'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Connect = () => {
    const navigation = useNavigation()
  return (
    <ScrollView>
      <View className="flex flex-row items-center justify-center gap-10 mt-5 bg-white pb-10">
        <TouchableOpacity  onPress={() => navigation.navigate('Home')} className="flex flex-col items-center gap-1 bg-pink-300 rounded-full w-[60px]">
            <AntDesign name="home" size={34} color="black" />
            <Text>家庭</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('News')} className="flex flex-col items-center gap-1">
            <Entypo name="news" size={34} color="black" />
            <Text>便り</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col gap-1 items-center">
            <Feather name="settings" size={34} color="black" />
            <Text>設定</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col items-center gap-1">
            <MaterialCommunityIcons name="restart" size={24} color="black" />
            <Text>止める</Text>
        </TouchableOpacity>
      </View>

      <View className="w-[300px] h-[200px] rounded-lg bg-white mx-auto mt-10">
        <View className="flex flex-row justify-center pt-5 items-center gap-1">
            <AntDesign name="videocamera" size={34} color="black" />
            <Text>始まる</Text>
        </View>
      </View>

      <View className="w-[300px] h-[100px] rounded-lg bg-white mx-auto mt-10">
        <View className="flex flex-row justify-center pt-2 items-center gap-1">
            <FontAwesome name="comment-o" size={34} color="black" />
            <Text>コメント</Text>
        </View>
      </View>
       
       <View className="flex flex-row items-center justify-center gap-2 mt-5 p-2 ">
            <TouchableOpacity className="w-[160px] h-[100px] rounded-lg bg-pink-400 mt-10">
                <Text>ライブストリーミングはこちら</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[160px] h-[100px] rounded-lg bg-pink-400 mt-10">
             <Text className="w-[160px] h-[50px]">Bluetooth</Text>
             <Text>が接続中です b</Text>
            </TouchableOpacity>
       </View>
    </ScrollView>
  )
}

export default Connect