import { Image } from "expo-image";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source="https://picsum.photos/400/400"
        style={styles.image}
        contentFit="cover"
      />

      <Text style={styles.title}>About StudyOS</Text>

      <Text style={styles.description}>
        StudyOS is your personal student companion designed to help you stay
        organized. Manage notes, track assignments, monitor upcoming exams, and
        keep all your study resources in one place.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>1.0.0</Text>

        <Text style={[styles.label, { marginTop: 16 }]}>Contact</Text>

        <TextInput
          placeholder="your@email.com"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <ActivityIndicator
          size="small"
          color="#2563EB"
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  label: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 6,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#F8FAFC",
  },
});