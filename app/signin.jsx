import { Link } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Signin = () => {

  const handleGoogleSignIn = () => console.log('Google Sign In clicked');
  const handleFacebookSignIn = () => console.log('Facebook Sign In clicked');
  const handleTwitterSignIn = () => console.log('Twitter Sign In clicked');
  const handleAppleSignIn = () => console.log('Apple Sign In clicked');

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="w-full px-6">
        <Text className="text-4xl font-semibold text-center mb-6">Sign In</Text>

       
        <TextInput
          placeholder="Email"
          className="text-xl w-full border-2 border-blue-400 py-2 px-4 mt-4 rounded-full"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="text-xl w-full border-2 border-blue-400 py-2 px-4 mt-4 rounded-full"
        />

       
        <Link href="home" asChild>
          <TouchableOpacity className="bg-blue-400 py-3 rounded-full mt-6 items-center">
            <Text className="text-white text-xl font-semibold text-center">Sign In</Text>
          </TouchableOpacity>
        </Link>

         <View className="flex-row mt-4 justify-center">
          <Text>I don’t have an account? </Text>
          <Link href="signup" asChild>
            <TouchableOpacity>
              <Text className="text-blue-400 ml-1">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>

       
        <Text className="text-center mt-6 mb-4 text-gray-600">Or sign in with</Text>
        <View className="flex-row justify-center space-x-6">
        
          <TouchableOpacity
            onPress={handleGoogleSignIn}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>

          
          <TouchableOpacity
            onPress={handleFacebookSignIn}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>

         
          <TouchableOpacity
            onPress={handleTwitterSignIn}
            className="p-3 rounded-full bg-white shadow"
          >
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>

        
          <TouchableOpacity
            onPress={handleAppleSignIn}
            className="p-3 rounded-full bg-white shadow"
          >
            <Ionicons name="logo-apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>

    
       
      </View>
    </SafeAreaView>
  );
};

export default Signin;
