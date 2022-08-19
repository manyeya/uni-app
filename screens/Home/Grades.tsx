import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { Theme } from "../../constants";

const Grades = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "#921402" }}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Grades" color='white'/>
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Grades;

const styles = StyleSheet.create({});
