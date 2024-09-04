import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Main />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a", // Fondo negro con un toque más suave
    paddingHorizontal: 20, // Añadir un poco de padding lateral
  },
});
