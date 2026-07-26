import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {Host,
  Button,
  Text,} from "@expo/ui/jetpack-compose"
export default function Index() {
  const router = useRouter();

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

      <Link href="/about" style={styles.link}>
        Go to About Screen
      </Link>

      <View style={{ }}>
        <Host matchContents>
  <Button onClick={() => router.push("/about")}>
    <Text>About</Text>
  </Button>
</Host>
      </View>
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
  link: {
    color: "blue",
    fontSize: 16,
    marginTop: 10,
  },
});
