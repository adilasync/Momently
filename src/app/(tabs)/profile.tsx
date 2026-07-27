import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source="https://i.pravatar.cc/300"
        style={styles.avatar}
        contentFit="cover"
      />

      <Text style={styles.name}>Mohammed Adil</Text>
      <Text style={styles.email}>adil@example.com</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Role</Text>
          <Text style={styles.value}>Student</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>College</Text>
          <Text style={styles.value}>Computer Engineering</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Projects</Text>
          <Text style={styles.value}>12</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Experience</Text>
          <Text style={styles.value}>React Native</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profile ready</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#E2E8F0",
    marginBottom: 18,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    color: "#0F172A",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 4,
  },
  email: {
    color: "#64748B",
    fontSize: 15,
    marginBottom: 28,
  },
  card: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: "#FFFFFF",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    paddingHorizontal: 18,
    marginBottom: 24,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E2E8F0",
  },
  label: {
    color: "#64748B",
    fontSize: 14,
    fontWeight: "500",
  },
  value: {
    flexShrink: 1,
    color: "#1E293B",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
  },
  button: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#111827",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
