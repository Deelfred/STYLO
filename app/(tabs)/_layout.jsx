import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0367c5ff', // Green for active tab
        tabBarInactiveTintColor: '#6b7280', // Gray for inactive tab
        tabBarStyle: {
          backgroundColor: '#ffffff', // White background
          borderTopColor: '#e5e7eb', // Light gray top border
          paddingBottom: 8,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#ffffff', 
          borderBottomColor: '#e5e7eb', // 
        },
        headerTintColor: '#1f2937', // Dark gray header text
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
     
      <Tabs.Screen
        name="home"
        options={{ headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      
      <Tabs.Screen
  name="add"
  options={{ headerShown: false,
    title: "",
    tabBarIcon: ({ focused }) => (
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: 40,
          backgroundColor: focused ? "#0367c5" : "#1E90FF",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20, 
        }}
      >
        <Ionicons
          name="add"
          size={42}
          color="#fff"
        />
      </View>
    ),
  }}
/>
    
      <Tabs.Screen
        name="settings"
        options={{headerShown: false,
          title: 'settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
