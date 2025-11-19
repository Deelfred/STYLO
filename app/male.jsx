import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MeasurementsForm = () => {
  const router = useRouter();

  
  const [chest, setChest] = useState('');
  
  const [hips, setHips] = useState('');

  return (
    <SafeAreaView className="flex-1 border-2 border-blue-400">

     
      <View className="flex-row items-center p-4">
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

        {/* SECTION 1 */}
        <View>
          <Text className="text-center text-2xl font-semibold pb-2 border-b-2">
            POLITICAL SUITE / COAT
          </Text>
        </View>

        
        <View className="flex-row items-center mb-4 mt-4">
          <Text className="flex-1 text-lg">Length</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Length size"
            keyboardType="numeric"
            
          />
        </View>

      
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">1/2 Waist</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter waist size"
            keyboardType="numeric"
          
          />
        </View>

       
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">Hips</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter hip size"
            keyboardType="numeric"
         
          />
        </View>

      
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">1/2 Chest</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter chest size"
            keyboardType="numeric"
          
          />
        </View>

        
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">1/2 Back</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Back size"
            keyboardType="numeric"
          
          />
        </View>

       
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">Around Arm</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Arm size"
            keyboardType="numeric"
         
          />
        </View>

       
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">Shoulder</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Shoulder size"
            keyboardType="numeric"
          
          />
        </View>

       
        <View className="flex-row items-center mb-4">
          <Text className="flex-1 text-lg">Sleeve</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Sleeve size"
            keyboardType="numeric"
        
          />
        </View>

       
        <View>
          <Text className="text-center text-2xl font-semibold pb-2 border-b-2">
            TROUSER / PANT
          </Text>
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Waist</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Waist size"
            keyboardType="numeric"
          
          />
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Length</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Length size"
            keyboardType="numeric"
         
          />
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Thighs</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Thighs size"
            keyboardType="numeric"
            value={hips}
            onChangeText={setHips}
          />
        </View>

      
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Bass</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Bass size"
            keyboardType="numeric"
           
          />
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Seat</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Seat size"
            keyboardType="numeric"
      
          />
        </View>

      
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Knee</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter knee size"
            keyboardType="numeric"
           
          />
        </View>

    
        <View>
          <Text className="text-center text-2xl font-semibold pb-2 border-b-2 mt-6">
            SHIRT / LONG SLEEVES
          </Text>
        </View>

    
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Length</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Length size"
            keyboardType="numeric"
           
          />
        </View>

      
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Back</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Back size"
            keyboardType="numeric"
          
          />
        </View>
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Sleeve</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Sleeve size"
            keyboardType="numeric"
         
          />
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Collar</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter collar size"
            keyboardType="numeric"
          
          />
        </View>

      
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Chest</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Chest size"
            keyboardType="numeric"
            value={chest}
            onChangeText={setChest}
          />
        </View>

     
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Around Arm</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Arm size"
            keyboardType="numeric"
     
          />
        </View>

       
        <View className="flex-row items-center mt-4">
          <Text className="flex-1 text-lg">Cuff</Text>
          <TextInput
            className="flex-1 border border-gray-400 px-2 py-1 rounded"
            placeholder="Enter Cuff size"
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
