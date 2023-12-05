import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
    return (
        <View className="flex-1 justify-center items-center bg-pink-500">
          <View className="w-4/5">
            <TextInput
              className="bg-white p-3 rounded-md mb-4"
              placeholder="ユーザー名"
            />
            <TextInput
              className="bg-white p-3 rounded-md mb-4"
              placeholder="パスワード"
              secureTextEntry={true}
            />
            <Button title="ログイン" onPress={() => navigation.navigate('Home')} />
            <Text className="text-white mt-4">パスワードをお忘れですか？</Text>
          </View>
        </View>
    )
}

export default LoginScreen