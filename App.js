import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenStack } from "./src/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenStack />
    </SafeAreaProvider>
  );
}
