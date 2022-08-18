import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardGrid from "../../components/CardGrid";
import Card from "../../components/ColoredCard";
import HeaderCard from "../../components/HeaderCard";
import Notifications from "../Notifications";
import Aps from "./Aps";
import Dates from "./Dates";
import Grades from "./Grades";
import Prospectus from "./Prospectus";

const Stack = createNativeStackNavigator();

function Base({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderCard navigation={navigation}/>
      <CardGrid navigation={navigation} />
    </SafeAreaView>
  );
}

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Base} />
      <Stack.Screen name="Grades" component={Grades} />
      <Stack.Screen name="Aps" component={Aps} />
      <Stack.Screen name="Prospectus" component={Prospectus} />
      <Stack.Screen name="Dates" component={Dates} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default Home;
