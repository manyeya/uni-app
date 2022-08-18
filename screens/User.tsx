import { View, Text, Pressable } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../constants";
import { Avatar, LoaderScreen } from "react-native-ui-lib";
import AsyncStorage from "@react-native-async-storage/async-storage";

const deleteData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // error reading value
  }
};

const User = ({ navigation }: any) => {
  const [loading, setLoading] = React.useState(false);
  const logout = async () => {
    setLoading(true);
    await deleteData();
    setLoading(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <LoaderScreen loading={true} />
      ) : (
        <>
          <Avatar>
            <Text>User</Text>
          </Avatar>
          <Pressable
            android_ripple={{
              color: "white",
              foreground: true,
            }}
            onPress={async () => await logout()}
            style={{
              backgroundColor: "black",
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 20,
              marginVertical: 20,
            }}
          >
            <Text style={{ color: "white" }}>Delete Account</Text>
          </Pressable>
        </>
      )}
    </SafeAreaView>
  );
};

export default User;
