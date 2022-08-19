import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text } from "react-native-paper";
import { Theme } from "../constants";

const Notifications = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: Theme.colors.primary }}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Notifications" />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Notifications;
