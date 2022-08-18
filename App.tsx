import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "./components/Nav";
import Setup from "./screens/Setup";
import { NavigationContainer } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Setup />
      </NavigationContainer>
    </PaperProvider>
  );
}
