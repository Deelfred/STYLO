import { Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const MeasurementsForm = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">

    
      <View className="flex-row items-center p-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text className="text-xl font-bold ml-3">Measurements</Text>
      </View>

      
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>

        
        <View className="flex-row border-b-2 border-gray-400 pb-2 mb-4">
          <Text className="flex-1 font-bold text-lg">Measurement</Text>
          <Text className="flex-1 font-bold text-lg">Value (cm)</Text>
        </View>

        
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Bust</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Waist</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Hip</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Shoulder</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Across Back</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Across Chest</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Shoulder to Nipple</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Nipple to Nipple</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Shoulder to Underbust</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter  size"
            keyboardType="numeric"
          />
        </View>
        
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Shoulder to Waist</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Shoulder to Hip</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Nape to Waist</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Under breast waist</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Blouse Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Kaba Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Hip Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>
         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Skirt Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Sleeve Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Slit Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Around Arm</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Around Arm 3/4</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Dress Length</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Wrist</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

         <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Cape</Text>

          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter size"
            keyboardType="numeric"
          />
        </View>

            <View className="mt-6">
  <Text className="text-lg font-bold mb-2">Add Notes</Text>

  <TextInput
    className="border border-gray-400 rounded-lg p-3 h-32"
    placeholder="Write any additional notes here..."
    placeholderTextColor="gray"
    multiline={true}
    textAlignVertical="top"
  />
</View>




        <View>
            <Text className="text-2xl text-center mb-4 mt-10 font-bold border-b-2">Customer Details</Text>
            <TextInput placeholder=" Name" className="border-2 mt-2 w-full rounded-full px-4 border-blue-400"/>
            <TextInput placeholder=" Phone Number" className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"/>
            <TextInput placeholder="Email Address" className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"/>
        </View>

          <TouchableOpacity className="bg-blue-600 py-3 rounded-xl mt-12">
                  <Text className="text-center text-white text-xl font-bold">Save</Text>
                </TouchableOpacity>
        

           <View className=" py-3 bg-gray-900 absolute bottom-4 h-20 left-0 right-0 justify-center items-center">
      <Text className="text-center text-white font-semibold">
        © 2025 STYLO
      </Text>
      <Text className="text-white">Thank you for choosing STYLO — Your Fit, Your Style!</Text>
    </View>

      </ScrollView>

     

    </SafeAreaView>
  );
};

export default MeasurementsForm;
