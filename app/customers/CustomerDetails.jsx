import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSearchParams } from "expo-router";
import { CustomerContext } from "../context/CustomerContext";

const CustomerDetails = () => {
  const { customerId } = useSearchParams();
  const { getCustomerById } = useContext(CustomerContext);

  const customer = getCustomerById(customerId);

  if (!customer) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Customer not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text className="text-2xl font-bold mb-4">Customer Details</Text>
      <Text className="text-lg font-semibold">Name: {customer.name}</Text>
      <Text className="text-lg">Phone: {customer.phone}</Text>
      <Text className="text-lg">Email: {customer.email}</Text>
      <Text className="text-lg mb-4">Notes: {customer.notes}</Text>

      <Text className="text-2xl font-bold mb-2">Measurements</Text>
      {Object.entries(customer.measurements).map(([key, value]) => (
        <View key={key} className="flex-row justify-between mb-2">
          <Text className="font-semibold">{key}</Text>
          <Text>{value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomerDetails;
