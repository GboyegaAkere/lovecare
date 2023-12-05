import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import { tw } from 'react-native-tailwindcss';

const ChatScreen = () => {
  // Sample chat data
  const chatData = [
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    { id: '1', sender: 'me', message: 'Hey there!' },
    { id: '2', sender: 'other', message: 'Hi! How are you?' },
    // Add more messages as needed
  ];

  const renderChatItem = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <View
        className={[
          'p-3 mb-2 rounded',
          isMe ? 'bg-pink-200 ml-20' : 'bg-pink-100 mr-20',
        ]}
      >
        <Text className={isMe ? 'text-right' : 'text-left'}>
          {item.message}
        </Text>
      </View>
    );
  };

  return (
    <View className='flex-1 bg-gray-100'>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle='p-4'
        inverted // To show the chat from the bottom
      />
    </View>
  );
};

export default ChatScreen;
