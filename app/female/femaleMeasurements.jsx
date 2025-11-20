import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomerContext } from "../context/CustomerContext";

const FemaleMeasurements = () => {
  const router = useRouter();
  const { addCustomer } = useContext(CustomerContext);

  // Customer info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  // Measurements
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [acrossBack, setAcrossBack] = useState("");
  const [acrossChest, setAcrossChest] = useState("");
  const [shoulderToNipple, setShoulderToNipple] = useState("");
  const [nippleToNipple, setNippleToNipple] = useState("");
  const [shoulderToUnderbust, setShoulderToUnderbust] = useState("");
  const [shoulderToWaist, setShoulderToWaist] = useState("");
  const [shoulderToHip, setShoulderToHip] = useState("");
  const [napeToWaist, setNapeToWaist] = useState("");
  const [underBreastWaist, setUnderBreastWaist] = useState("");
  const [blouseLength, setBlouseLength] = useState("");
  const [kabaLength, setKabaLength] = useState("");
  const [hipLength, setHipLength] = useState("");
  const [skirtLength, setSkirtLength] = useState("");
  const [sleeveLength, setSleeveLength] = useState("");
  const [slitLength, setSlitLength] = useState("");
  const [aroundArm, setAroundArm] = useState("");
  const [aroundArm34, setAroundArm34] = useState("");
  const [dressLength, setDressLength] = useState("");
  const [wrist, setWrist] = useState("");
  const [cape, setCape] = useState("");

  const handleSave = () => {
    if (!name || !phone) {
      Alert.alert("Error", "Please enter at least Name and Phone");
      return;
    }

    const newCustomer = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      notes,
      measurements: {
        bust,
        waist,
        hip,
        shoulder,
        acrossBack,
        acrossChest,
        shoulderToNipple,
        nippleToNipple,
        shoulderToUnderbust,
        shoulderToWaist,
        shoulderToHip,
        napeToWaist,
        underBreastWaist,
        blouseLength,
        kabaLength,
        hipLength,
        skirtLength,
        sleeveLength,
        slitLength,
        aroundArm,
        aroundArm34,
        dressLength,
        wrist,
        cape,
      },
    };

    addCustomer(newCustomer);
    Alert.alert("Success", "Customer saved successfully!");
    router.push("/customers/customerList");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ml-3">Female Measurements</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
        <Text className="text-2xl font-bold mb-2">Customer Details</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} className="border-2 mt-2 w-full rounded-full px-4 border-blue-400" />
        <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} className="border-2 mt-4 w-full rounded-full px-4 border-blue-400" keyboardType="phone-pad" />
        <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} className="border-2 mt-4 w-full rounded-full px-4 border-blue-400" keyboardType="email-address" />

        <Text className="text-2xl font-bold mt-6 mb-2">Measurements</Text>
        {[
          { label: "Bust", value: bust, setter: setBust },
          { label: "Waist", value: waist, setter: setWaist },
          { label: "Hip", value: hip, setter: setHip },
          { label: "Shoulder", value: shoulder, setter: setShoulder },
          { label: "Across Back", value: acrossBack, setter: setAcrossBack },
          { label: "Across Chest", value: acrossChest, setter: setAcrossChest },
          { label: "Shoulder to Nipple", value: shoulderToNipple, setter: setShoulderToNipple },
          { label: "Nipple to Nipple", value: nippleToNipple, setter: setNippleToNipple },
          { label: "Shoulder to Underbust", value: shoulderToUnderbust, setter: setShoulderToUnderbust },
          { label: "Shoulder to Waist", value: shoulderToWaist, setter: setShoulderToWaist },
          { label: "Shoulder to Hip", value: shoulderToHip, setter: setShoulderToHip },
          { label: "Nape to Waist", value: napeToWaist, setter: setNapeToWaist },
          { label: "Under Breast Waist", value: underBreastWaist, setter: setUnderBreastWaist },
          { label: "Blouse Length", value: blouseLength, setter: setBlouseLength },
          { label: "Kaba Length", value: kabaLength, setter: setKabaLength },
          { label: "Hip Length", value: hipLength, setter: setHipLength },
          { label: "Skirt Length", value: skirtLength, setter: setSkirtLength },
          { label: "Sleeve Length", value: sleeveLength, setter: setSleeveLength },
          { label: "Slit Length", value: slitLength, setter: setSlitLength },
          { label: "Around Arm", value: aroundArm, setter: setAroundArm },
          { label: "Around Arm 3/4", value: aroundArm34, setter: setAroundArm34 },
          { label: "Dress Length", value: dressLength, setter: setDressLength },
          { label: "Wrist", value: wrist, setter: setWrist },
          { label: "Cape", value: cape, setter: setCape },
        ].map((field) => (
          <TextInput
            key={field.label}
            placeholder={field.label}
            value={field.value}
            onChangeText={field.setter}
            keyboardType="numeric"
            className="border border-gray-400 px-2 py-1 rounded mt-2"
          />
        ))}

        <Text className="text-lg font-bold mt-4 mb-2">Add Notes</Text>
        <TextInput
          placeholder="Notes..."
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
          className="border border-gray-400 rounded-lg p-3 h-32"
        />

        <TouchableOpacity onPress={handleSave} className="bg-blue-600 py-3 rounded-xl mt-6">
          <Text className="text-center text-white text-xl font-bold">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FemaleMeasurements;
