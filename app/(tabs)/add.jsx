import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Add = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/s2.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
      blurRadius={8}
    >
      <SafeAreaView className="flex-1 justify-center items-center">
        
        <View className="px-10">

        <Link href="/male/maleMeasurements" asChild>
          <TouchableOpacity className="border-2 border-white rounded-xl mb-6 py-2 px-4">
            <View className="flex-row justify-center items-center space-x-2">
              <Ionicons name="man" color="white" size={40} />
              <Text className="text-4xl font-bold text-white">MALE</Text>
            </View>
          </TouchableOpacity>
          </Link>

    <Link href="/female/femaleMeasurements" asChild>
          <TouchableOpacity className="border-2 border-white rounded-xl py-2 px-4">
            <View className="flex-row justify-center items-center space-x-2">
              <Ionicons name="woman" color="white" size={40} />
              <Text className="text-4xl font-bold text-white">FEMALE</Text>
            </View>
          </TouchableOpacity>
          </Link>

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default Add;
