import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { CustomerProvider } from "./context/CustomerContext";

const _layout = () => {
  return (
    <CustomerProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="customerManagement" options={{ headerShown: false }} />

        <Stack.Screen name="male/maleMeasurements" options={{ headerShown: false }} />
        <Stack.Screen name="female/femaleMeasurements" options={{ headerShown: false }} />

        <Stack.Screen name="customers/CustomerList" options={{ headerShown: false }} />
        <Stack.Screen name="customers/CustomerDetails" options={{ headerShown: false }} />
      </Stack>
    </CustomerProvider>
  );
};

export default _layout;
