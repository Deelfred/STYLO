import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Signup = () => {
 
  const handleGoogleSignUp = () => {
    console.log('Google Sign Up clicked');
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook Sign Up clicked');
  };

  const handleTwitterSignUp = () => {
    console.log('Twitter Sign Up clicked');
  };

  const handleAppleSignUp = () => {
    console.log('Apple Sign Up clicked');
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="w-full px-6">
        <Text className="text-4xl font-semibold text-center mb-6">Sign Up</Text>
        <TextInput
          placeholder="First Name"
          className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
        />
        <TextInput
          placeholder="Last Name"
          className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
        />
        <TextInput
          placeholder="Email"
          className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
        />

       
        <TouchableOpacity className="bg-blue-400 mt-6 py-3 rounded-full">
          <Text className="text-white text-center text-lg font-semibold">Sign Up</Text>
        </TouchableOpacity>

       
        <View className="flex-row mt-4 justify-center">
          <Text>Already have an account?</Text>
          <Link href="signin" asChild>
            <TouchableOpacity>
              <Text className="text-blue-400 ml-1">Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>

       
        <Text className="text-center mt-6 mb-4 text-gray-600">Or sign up with</Text>
        <View className="flex-row justify-center space-x-6">
         
          <TouchableOpacity
            onPress={handleGoogleSignUp}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>

        
          <TouchableOpacity
            onPress={handleFacebookSignUp}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>

         
          <TouchableOpacity
            onPress={handleTwitterSignUp}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>

          
          <TouchableOpacity
            onPress={handleAppleSignUp}
            className="p-3 rounded-full bg-white shadow"
          >
            <Ionicons name="logo-apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
