import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import {
  Button,
  Column,
  Host,
  ModalBottomSheet,
} from "@expo/ui/jetpack-compose";
import type { ModalBottomSheetRef } from "@expo/ui/jetpack-compose";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const sheetRef = useRef<ModalBottomSheetRef>(null);

  const hideSheet = async () => {
    await sheetRef.current?.hide();
    setVisible(false);
  };

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

      <Host matchContents>
        <Column>
          <Button onClick={() => setVisible(true)}>
            <Text>Open Bottom Sheet</Text>
          </Button>

          {visible && (
            <ModalBottomSheet
              ref={sheetRef}
              onDismissRequest={() => setVisible(false)}
            >
              <Column>
                <View style={styles.sheetContent}>
                  <Text style={styles.sheetTitle}>
                    Bottom Sheet Content
                  </Text>

                  <Text style={styles.sheetDescription}>
                    This is a native Material 3 Bottom Sheet from Expo UI.
                  </Text>

                  <View style={styles.sheetAction}>
                    <Button onClick={hideSheet}>
                      <Text>Close</Text>
                    </Button>
                  </View>
                </View>
              </Column>
            </ModalBottomSheet>
          )}
        </Column>
      </Host>
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
  sheetContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 28,
  },
  sheetTitle: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  sheetDescription: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 22,
  },
  sheetAction: {
    alignItems: "flex-start",
    marginTop: 20,
  },
});
