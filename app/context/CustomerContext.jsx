import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create context
export const CustomerContext = createContext();

// Provider
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  // Load customers from storage on app start
  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@customers");
        if (jsonValue != null) {
          setCustomers(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error("Error loading customers from storage", e);
      }
    };
    loadCustomers();
  }, []);

  // Save customers to storage whenever it changes
  useEffect(() => {
    const saveCustomers = async () => {
      try {
        await AsyncStorage.setItem("@customers", JSON.stringify(customers));
      } catch (e) {
        console.error("Error saving customers to storage", e);
      }
    };
    saveCustomers();
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const removeCustomer = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        removeCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
