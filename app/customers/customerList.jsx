import React, { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CustomerContext } from "../context/CustomerContext";
import { Ionicons } from "@expo/vector-icons";

const CustomerList = () => {
  const { customers } = useContext(CustomerContext);
  const [expandedId, setExpandedId] = useState(null); // track which customer is expanded

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text className="text-2xl font-bold mb-4">Customer List</Text>

      {customers.length === 0 && (
        <Text>No customers saved yet.</Text>
      )}

      {customers.map((customer) => (
        <View
          key={customer.id}
          className="border border-gray-400 rounded-lg mb-4 p-4"
        >
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold">{customer.name}</Text>
            <TouchableOpacity onPress={() => toggleExpand(customer.id)}>
              <Ionicons
                name={expandedId === customer.id ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {expandedId === customer.id && (
            <View className="mt-4">
              <Text className="text-md">Phone: {customer.phone}</Text>
              <Text className="text-md">Email: {customer.email}</Text>
              <Text className="text-md mb-2">Notes: {customer.notes}</Text>

              <Text className="text-lg font-semibold mb-2">Measurements:</Text>
              {Object.entries(customer.measurements).map(([key, value]) => (
                <View key={key} className="flex-row justify-between mb-1">
                  <Text className="font-medium">{key}</Text>
                  <Text>{value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomerList;
