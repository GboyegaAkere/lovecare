import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import Menu from './Menu';



const NewsScreen = () => {
  const news = [
    {
      id: 1,
      title: 'ニュース速報: デバイスに接続する必要がある理由',
      content: '人々にもっと喜びを与えるため、デバイスに接続する必要があります',
    },

    {
        id: 2,
        title: 'ニュース速報: デバイスに接続する必要がある理由',
        content: '人々にもっと喜びを与えるため、デバイスに接続する必要があります',
      },

      {
        id: 3,
        title: 'ニュース速報: デバイスに接続する必要がある理由',
        content: '人々にもっと喜びを与えるため、デバイスに接続する必要があります',
      },


      {
        id: 4,
        title: 'ニュース速報: デバイスに接続する必要がある理由',
        content: '人々にもっと喜びを与えるため、デバイスに接続する必要があります',
      },


      {
        id: 5,
        title: 'ニュース速報: デバイスに接続する必要がある理由',
        content: '人々にもっと喜びを与えるため、デバイスに接続する必要があります',
      },

  ];

  return (
    <>
   
    <ScrollView className='flex-1 bg-pink-200'>
      <View className='p-4'>
        <Text className='text-2xl font-bold mb-4'>最新ニュース</Text>
        
        {news.map((item) => (
          <View key={item.id} className='bg-gray-200 p-4 mb-4 rounded'>
            <Text className='text-lg font-bold mb-2'>{item.title}</Text>
            <Text className='text-sm'>{item.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    <Menu/>
    </>
  );
};

export default NewsScreen;
