import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Home = () => {
  const [isSearching, setIsSearching] = useState(false); 
  const [text, setText] = useState(""); 

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
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

          {/* Search Bar */}
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
              <Ionicons name={isSearching ? "close" : "search"} color="white" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Main Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="mt-6 items-center px-4">

          {/* App Name */}
          <Text className="text-4xl font-bold text-blue-600">STYLO</Text>
          <Text className="text-gray-700">from style to smile</Text>

          {/* Description */}
          <Text className="mt-6 text-center text-white text-lg bg-green-600 p-4 rounded-lg">
            STYLO is your smart companion for managing customers and their measurements with ease.
            Built for modern seamstresses and tailors, STYLO helps you stay organized, save time, 
            and deliver perfect fittings — every single time.
            Whether you are sewing for one client or running a busy shop, STYLO keeps every detail 
            right at your fingertips. Measure better. Work faster. Create beautifully.
          </Text>

          {/* Hero Image with overlay */}
          <View className="mt-5 relative w-full h-[600px]">
            <Image
              source={require("../../assets/images/s3.jpg")}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
            <Animated.Text
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [
                  { translateX: -150 },
                  { translateY: -50 },
                  { translateY: slideAnim }
                ],
                opacity: fadeAnim,
              }}
              className="text-white text-3xl font-bold text-center w-[300px]"
            >
              STYLO {"\n"}from style to smile
            </Animated.Text>
          </View>

          {/* Quote Image */}
          <View className="w-full relative items-center mt-6">
            <Image
              source={require("../../assets/images/s4.jpg")}
              className="w-full h-80 rounded-xl"
              resizeMode="cover"
            />
            <Text className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold text-center w-[300px] bg-black/50 p-2 rounded">
              “Measure well, sew well, smile always.”
            </Text>
          </View>

          {/* Info Image with text */}
          <View className="w-full items-center relative mt-6">
            <Image
              source={require("../../assets/images/s5.jpg")}
              className="w-full h-80 rounded-xl"
              resizeMode="cover"
            />
            <Animated.Text
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [
                  { translateX: -150 },
                  { translateY: -50 },
                  { translateY: slideAnim }
                ],
                opacity: fadeAnim,
              }}
              className="text-white text-xl font-semibold text-center w-[300px]"
            >
              STYLO — Your smart companion for seamless tailoring. Manage customers, track measurements,
              and deliver perfect fittings — all in one place.
            </Animated.Text>
          </View>

          {/* Customer Management Button */}
          <Link href="customerManagement" asChild>
            <TouchableOpacity className="mt-6 items-center">
              <Text className="text-2xl p-4 bg-green-600 text-white rounded-xl">
                CUSTOMER MANAGEMENT
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Did You Know Section */}
          <Text className="text-2xl font-bold mb-4 text-blue-600 mt-6">Did You Know?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4 mb-6">
            <View className="bg-blue-100 p-4 rounded-xl w-64 shadow">
              <Text className="font-semibold text-lg mb-2">Quick Tip</Text>
              <Text>Always measure twice before cutting fabric to avoid mistakes!</Text>
            </View>
            <View className="bg-green-100 p-4 rounded-xl w-64 shadow">
              <Text className="font-semibold text-lg mb-2">Fun Fact</Text>
              <Text>The word seamstress comes from the word seam, meaning stitch.</Text>
            </View>
            <View className="bg-purple-100 p-4 rounded-xl w-64 shadow">
              <Text className="font-semibold text-lg mb-2">Customer Love</Text>
              <Text>STYLO helps save an average of 2 hours per week on measurements!</Text>
            </View>
          </ScrollView>

          {/* Quick Action Buttons */}
          <View className="mt-4 mb-6 space-y-4 w-full">
            <Link href="add" asChild>
            <TouchableOpacity className="bg-blue-600 px-6 py-4 rounded-xl shadow">
              <Text className="text-white font-bold text-center">Add Customer</Text>
            </TouchableOpacity>
            </Link>

            <Link href="customerManagement" asChild>
            <TouchableOpacity className="bg-green-600 px-6 py-4 rounded-xl shadow mt-2">
              <Text className="text-white font-bold text-center">View Customers</Text>
            </TouchableOpacity>
            </Link>
           
          </View>

          {/* Testimonials */}
          <Text className="text-2xl font-bold mb-4 text-blue-600">What Our Users Say</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4 mb-6">
            <View className="bg-gray-100 p-4 rounded-xl w-72 shadow">
              <Text className="text-gray-800 italic"> STYLO makes managing my clients a breeze </Text>
              <Text className="mt-2 font-bold text-gray-700 text-right"> Nana</Text>
            </View>
            <View className="bg-gray-100 p-4 rounded-xl w-72 shadow">
              <Text className="text-gray-800 italic"> I love saving all my measurements digitally </Text>
              <Text className="mt-2 font-bold text-gray-700 text-right"> Abena</Text>
            </View>
            <View className="bg-gray-100 p-4 rounded-xl w-72 shadow">
              <Text className="text-gray-800 italic"> Perfect for busy seamstresses</Text>
              <Text className="mt-2 font-bold text-gray-700 text-right"> Yaa</Text>
            </View>
          </ScrollView>


          {/* Footer */}
<View className="w-full bg-black py-6 mt-6 rounded-t-3xl items-center">
  <Text className="text-white text-lg font-bold mb-2">About STYLO</Text>
  <Text className="text-white text-center text-sm px-4">
    STYLO is your smart companion for seamstresses and tailors. Manage customers, track measurements, 
    and deliver perfect fittings — all in one place.
  </Text>

  <View className="flex-row mt-4 ">
    <Ionicons name="logo-facebook" size={24} color="white" />
    <Ionicons name="logo-instagram" size={24} color="white" />
    <Ionicons name="logo-twitter" size={24} color="white" />
  </View>

  <Text className="text-white text-center text-xs mt-4">
    © {new Date().getFullYear()} STYLO. All rights reserved.
  </Text>
</View>


        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
