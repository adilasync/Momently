import { Image } from "expo-image";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Image
        source="https://picsum.photos/400/300"
        style={styles.image}
        contentFit="cover"
      />

      <TextInput placeholder="Enter your email" style={styles.input} />

      <ActivityIndicator size="large" style={{ marginVertical: 20 }} />

      <Text style={styles.helperText}>
        Native tab screen is rendering correctly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  helperText: {
    color: "#374151",
    fontSize: 14,
  },
});
