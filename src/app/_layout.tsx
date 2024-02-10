import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useFonts } from "expo-font";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Pacifico_400Regular
  });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  )
}