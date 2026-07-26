import { Stack } from "expo-router";

import { View, Text } from 'react-native'
import React from 'react'

export default function AuthLayou() {
  return (
   <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="onboarding" />
    </Stack>
  )
}