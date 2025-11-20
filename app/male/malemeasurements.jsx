import React, { useState, useContext } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { CustomerContext } from './../context/CustomerContext'; // adjust path if needed

const MaleMeasurements = () => {
  const router = useRouter();
  const { addCustomer } = useContext(CustomerContext);

  // Customer Info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Measurements
  const [chest, setChest] = useState('');
  const [hips, setHips] = useState('');
  const [length, setLength] = useState('');
  const [waist, setWaist] = useState('');
  const [halfWaist, setHalfWaist] = useState('');
  const [back, setBack] = useState('');
  const [aroundArm, setAroundArm] = useState('');
  const [shoulder, setShoulder] = useState('');
  const [sleeve, setSleeve] = useState('');
  const [bass, setBass] = useState('');
  const [seat, setSeat] = useState('');
  const [knee, setKnee] = useState('');

  const handleSave = () => {
    if (!name || !phone) {
      Alert.alert('Error', 'Please enter at least Name and Phone');
      return;
    }

    const newCustomer = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      notes,
      measurements: {
        chest,
        hips,
        length,
        waist,
        halfWaist,
        back,
        aroundArm,
        shoulder,
        sleeve,
        bass,
        seat,
        knee,
      },
    };

    addCustomer(newCustomer);
    Alert.alert('Success', 'Customer saved successfully!');
    router.push('/customers/CustomerList');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ml-3">Male Measurements</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
        {/* Customer Info */}
        <View className="mb-6">
          <Text className="text-2xl font-bold mb-2">Customer Details</Text>
          <TextInput
            placeholder="Name"
            className="border-2 mt-2 w-full rounded-full px-4 border-blue-400"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Phone Number"
            className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Email Address"
            className="border-2 mt-4 w-full rounded-full px-4 border-blue-400"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Measurements */}
        <Text className="text-2xl font-bold mb-2">Measurements</Text>
        <TextInput
          placeholder="Chest"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={chest}
          onChangeText={setChest}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Hips"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={hips}
          onChangeText={setHips}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Length"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={length}
          onChangeText={setLength}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Waist"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={waist}
          onChangeText={setWaist}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="1/2 Waist"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={halfWaist}
          onChangeText={setHalfWaist}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Back"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={back}
          onChangeText={setBack}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Around Arm"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={aroundArm}
          onChangeText={setAroundArm}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Shoulder"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={shoulder}
          onChangeText={setShoulder}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Sleeve"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={sleeve}
          onChangeText={setSleeve}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Bass"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={bass}
          onChangeText={setBass}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Seat"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={seat}
          onChangeText={setSeat}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Knee"
          className="border border-gray-400 px-2 py-1 rounded mt-2"
          value={knee}
          onChangeText={setKnee}
          keyboardType="numeric"
        />

        {/* Notes */}
        <Text className="text-lg font-bold mt-4 mb-2">Add Notes</Text>
        <TextInput
          className="border border-gray-400 rounded-lg p-3 h-32"
          placeholder="Write any additional notes here..."
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
        />

        {/* Save */}
        <TouchableOpacity
          className="bg-blue-600 py-3 rounded-xl mt-6"
          onPress={handleSave}
        >
          <Text className="text-center text-white text-xl font-bold">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MaleMeasurements;
