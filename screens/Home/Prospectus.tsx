import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";

const Prospectus = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: '#8F6C3C' }}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Aps" color='white'/>
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Prospectus;

const styles = StyleSheet.create({});
