import React from "react";
import {
  Text,
  Surface,
  TextInput,
  Searchbar,
  Headline,
} from "react-native-paper";
import { Pressable, StyleSheet, View } from "react-native";
import { useWindowDimensions } from "react-native";
import { Theme } from "../constants";
import Octicons from "@expo/vector-icons/Octicons";
import { Avatar } from "react-native-ui-lib";
function HeaderCard({navigation}:any) {
  const HEIGHT = useWindowDimensions().height * 0.28;
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <Surface elevation={0} style={{ ...styles.surface, height: HEIGHT }}>
      <View style={styles.top}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "800" }}>
            Hello
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
            Khutso Siema
          </Text>
        </View>
        <Pressable
          android_ripple={{
            color: "white",
            radius: Theme.roundness.md,
            foreground: true,
          }}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Avatar backgroundColor="rgba(255,255,255,.3)">
            <Octicons name="bell-fill" size={24} color="white" />
          </Avatar>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Searchbar
        elevation={0}
        iconColor={Theme.colors.text.primary}
        placeholderTextColor={Theme.colors.primary}
   
          style={{
            borderRadius: Theme.roundness.md,
            margin: 0,
            backgroundColor: "rgba(255,255,255,.3)",
            color: Theme.colors.primary,
          }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 16,
    margin: 8,
    borderRadius: 24,
    backgroundColor: Theme.colors.primary,
    justifyContent: "space-between",
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeaderCard;
