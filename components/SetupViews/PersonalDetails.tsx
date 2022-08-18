import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "../../constants";

const PersonalDetails = ({ setCurrentStep }: any) => {
  const HEIGHT = useWindowDimensions().height * 0.6;

  const [details, setDetails] = React.useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [iserror, setError] = React.useState(false);

  const storeDetails = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("p_details", jsonValue);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <ScrollView style={{ height: HEIGHT }}>
      <TextInput
        mode="outlined"
        label="Your first name"
        placeholder="Type your first name"
        right={<TextInput.Affix text="/30" />}
        value={details.fName}
        outlineColor={Theme.colors.primary}
        selectionColor={Theme.colors.text.primary}
        activeOutlineColor={Theme.colors.primary}
        onChangeText={(text) => {
          setDetails({ ...details, fName: text });
        }}
        style={{ marginBottom: HEIGHT * 0.02 }}
        placeholderTextColor={Theme.colors.primary}
      />
      <TextInput
        mode="outlined"
        label="Your last name"
        placeholder="Type your last name"
        right={<TextInput.Affix text="/30" />}
        value={details.lName}
        outlineColor={Theme.colors.primary}
        selectionColor={Theme.colors.text.primary}
        activeOutlineColor={Theme.colors.primary}
        onChangeText={(text) => {
          setDetails({ ...details, lName: text });
        }}
        placeholderTextColor={Theme.colors.primary}
        style={{ marginBottom: HEIGHT * 0.02 }}
      />
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Type your Email"
        value={details.email}
        outlineColor={Theme.colors.primary}
        selectionColor={Theme.colors.text.primary}
        activeOutlineColor={Theme.colors.primary}
        onChangeText={(text) => {
          setDetails({ ...details, email: text });
        }}
        style={{ marginBottom: HEIGHT * 0.1 }}
        placeholderTextColor={Theme.colors.primary}
      />
      <Pressable
        style={{
          backgroundColor: Theme.colors.primary,
          padding: Theme.roundness.md,
          borderRadius: Theme.roundness.xs,
        }}
        android_ripple={{
          color: "white",
          foreground: true,
        }}
        onPress={() => {
          if (details.fName.length > 0 && details.lName.length > 0) {
            storeDetails(details);
            setCurrentStep(1);
          } else {
            setError(true);
          }
        }}
      >
        <Text
          style={{
            color: Theme.colors.text.primary,
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Next
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({});
