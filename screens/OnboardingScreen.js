import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
// import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation()
  const donebutton = ({...props}) =>{
    // return(
    //   <TouchableOpacity  {...props}>
    //     <Text>DONE</Text>
    //   </TouchableOpacity>
    // )
  }
  return (
       <View className="flex-1">
        <Onboarding
             containerStyles={{paddingHorizontal:15}}
              onSkip={()=> navigation.navigate("Login")}
              onDone={()=> navigation.navigate("Login")}
              // DoneButtonComponent={donebutton}
                pages={[
                {
                  backgroundColor: '#FF00FF',
                  image:(
                    <View>
                     <Image className="h-82 w-82"/>
                    </View>
                  ),
                  title: 'ラブケアへようこそ',
                  subtitle: '安全な環境でアダルト コンテンツを探索します。 簡単なチュートリアルから始めましょう。',
                },

                {
                  backgroundColor: '#FF10F0',
                  image:(
                    <View>
                     <Image className="h-82 w-82"/>
                    </View>
                  ),
                  title: '発見して接続する',
                  subtitle: '多様なプロフィールを探索し、情熱や好みを共有する人々とつながりましょう',
                },

                {
                  backgroundColor: '#FF69B4',
                  image:(
                    <View>
                      <Image className="h-82 w-82"/>
                    </View>
                  ),
                  title: '安全な探査',
                  subtitle:'あなたの安全は重要です。 安全で楽しい体験を保証するために、セキュリティ機能とガイドラインを確認してください',
                },
              ]}
          />
       </View>
          
  )
}

export default OnBoarding