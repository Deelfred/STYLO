import {   } from 'react-native'
import React from 'react'
import "../global.css"
import { Stack } from 'expo-router'

const _layout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown: false}}/>
    <Stack.Screen name="signin" options={{headerShown: false}}/>
    <Stack.Screen name="signup" options={{headerShown: false}}/>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    <Stack.Screen name="male" options={{headerShown: false}}/>
    <Stack.Screen name="female" options={{headerShown: false}}/>
   </Stack>
  )
}

export default _layout

