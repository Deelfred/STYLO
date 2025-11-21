import React, { useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { CustomerContext } from "./context/CustomerContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CustomerManagement = () => {
  const { customers, removeCustomer } = useContext(CustomerContext);
  const router = useRouter();

  const handleEdit = (customer) => {
    const route = customer.type === "male" ? "/male/maleMeasurements" : "/female/femaleMeasurements";
    router.push({
      pathname: route,
      params: { customerId: customer.id }, 
    });
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Customer",
      "Are you sure you want to delete this customer?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => removeCustomer(id) },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <View className="flex-row items-center p-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ml-3">Customer Management</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {customers.length === 0 && <Text>No customers found</Text>}

        {customers.map((customer) => (
          <View key={customer.id} className="border p-4 mb-4 rounded-lg bg-white shadow-lg">
            <Text className="text-lg font-bold ">{customer.name}</Text>
            <Text>Phone: {customer.phone}</Text>
            <Text>Email: {customer.email}</Text>

            <View className="flex-row mt-2 space-x-2">
              <TouchableOpacity
                onPress={() => handleEdit(customer)}
                className="bg-green-600 p-2  rounded flex-1"
              >
                <Text className="text-white text-center">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(customer.id)}
                className="bg-red-600 p-2 rounded flex-1"
              >
                <Text className="text-white text-center ">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerManagement;
