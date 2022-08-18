import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "./components/Nav";
import Setup from "./screens/Setup";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";

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
  const [user, setUser] = React.useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("new");
      return value != null ? setUser(true) : setUser(false);
    } catch (e) {
      setUser(false);
      console.log(e);
    }
  };
  useEffect(() => {
    const myData = async () => {
      await getData();
      console.log(user);
    };
    myData();
  }, [user]);

  const Stack = createNativeStackNavigator();

  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={user ? "Nav" : "Setup"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Nav" component={Nav} />
            <Stack.Screen name="Setup" component={Setup} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}
