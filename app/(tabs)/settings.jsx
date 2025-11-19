import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  
  const SettingRow = ({ iconName, label }) => (
    <View className="flex-row justify-between items-center border-2 mt-4 px-4 py-2">
      <View className="flex-row items-center">
        <Ionicons name={iconName} size={20} color="white" />
        <Text className="text-white text-xl font-semibold ml-3">{label}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView>
       
        <View className="flex-row items-center p-4 border-b border-gray-300">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-xl font-bold ml-3 text-white">Settings</Text>
        </View>

       
        <SettingRow iconName="people" label="Personal info" />
        <SettingRow iconName="briefcase" label="Business info" />
        <SettingRow iconName="call" label="Phone numbers" />
        <SettingRow iconName="mail" label="Change email" />
        <SettingRow iconName="notifications" label="Manage notifications" />
         <SettingRow iconName="body" label="About Stylo" />
          <SettingRow iconName="star" label="Rate Us" />
           <SettingRow iconName="lock" label="Change password" /> 
            <SettingRow iconName="trash" label="Delete my account permanently" />
             <SettingRow iconName="log-out " label="Log out" />
      </SafeAreaView>
    </View>
  );
};

export default Settings;
