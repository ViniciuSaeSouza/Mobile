import { Stack } from "expo-router";
import { ThemeProvider } from "../src/context/ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/services/i18n";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";



export default function Layout() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <ClerkProvider tokenCache={tokenCache}>
          <Slot screenOptions={{ headerShown: false }} />
        </ClerkProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
