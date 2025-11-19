import { Text, View,  ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'


const index = () => {
  return (

    <ImageBackground 
    source={require("../assets/images/s1.jpg")}
    className="flex-1 h-600 w-full"
    
    

    >
    <SafeAreaView className="flex-1 justify-center items-center">
        <View className=" ">
           <Text className=" text-8xl font-bold text-white ">STYLO</Text>
           <Text className="text-center text-xl font-semibold text-white shadow-xl "> From style to smile</Text>

        </View>
        <Link href="signin" asChild >
       <TouchableOpacity className="">
        <View className=" mt-20 ">
           <Text className=" text-white text-center text-xl font-bold bg-blue-600 px-6 py-2 rounded-xl ">Get Started</Text>
        </View>
       </TouchableOpacity>
       </Link>


        
       
    </SafeAreaView>
     </ImageBackground>

   
  )
}

export default index

