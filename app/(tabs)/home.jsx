import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Home = () => {
  const [isSearching, setIsSearching] = useState(false); 
  const [text, setText] = useState(""); 

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="bg-blue-600 rounded-b-3xl pb-6">

       
        <View className="px-4">
          
          <View className="flex-row justify-between items-center mt-4">
            <Text className="text-2xl text-white font-bold">Hello...</Text>

            <View className="flex-row">
              <Ionicons name="notifications" color="white" size={30} className="mr-4" />

              <Link href="settings" asChild>
                <TouchableOpacity>
                  <Ionicons name="person-add" color="white" size={28} />
                </TouchableOpacity>
              </Link> 
            </View>
          </View>

          
          <View className="flex-row mt-12 p-2 items-center border-2 border-white rounded-full px-4">
            <TextInput
              placeholder="Search"
              placeholderTextColor="white"
              value={text}
              onChangeText={setText}
              className="flex-1 text-white text-xl"
              autoFocus={isSearching}
              onFocus={() => setIsSearching(true)}
            />

            <TouchableOpacity
              onPress={() => {
                if (isSearching) {
                  setIsSearching(false);
                  setText("");
                } else {
                  setIsSearching(true);
                }
              }}
            >
              <Ionicons
                name={isSearching ? "close" : "search"}
                color="white"
                size={28}
              />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>

      
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="mt-6 items-center px-4 bg-white pb-10">

          <Text className="text-4xl font-bold text-blue-600">STYLO</Text>
          <Text className=" text-gray-700">from style to smile</Text>

          <Image
            source={require("../../assets/images/s3.jpg")}
            style={{ height: 600, width: '100%', marginTop: 20 }}
            resizeMode="cover"
          />

          <TouchableOpacity>
            <View className="mt-6 items-center">
              <Text className="text-2xl p-4 bg-black/50 text-white">
                CUSTOMER MANAGEMENT
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

    </View>
  );
};

export default Home;
