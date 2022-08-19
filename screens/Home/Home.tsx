import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
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
  const [user,setUser] = React.useState(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("p_details");
      return value != null ? setUser(JSON.parse(value)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderCard navigation={navigation} user={user}/>
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
