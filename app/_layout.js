import { Stack } from "expo-router/stack";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
