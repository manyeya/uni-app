import React from "react";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { Title } from "react-native-paper";
import { View, Text } from "react-native-ui-lib";
import ColoredCard from "./ColoredCard";

const DATA = [
  {
    id: "1",
    title: "Grades",
    subtitle: "Add/Edit Your Grades",
    image: require("../assets/cards/Grades.png"),
    bottom: false,
    color: "#921402",
  },
  {
    id: "2",
    title: "Aps",
    subtitle: "Your Overall Aps",
    image: require("../assets/cards/Aps.png"),
    bottom: true,
    color: "#383F95",
  },
  {
    id: "3",
    title: "Prospectus",
    subtitle: "Various Courses Offered",
    image: require("../assets/cards/Prosp.png"),
    bottom: true,
    color: "#8F6C3C",
  },
  {
    id: "4",
    title: "Dates",
    subtitle: "Important University Dates",
    image: require("../assets/cards/Date.png"),
    bottom: false,
    color: "#17633B",
  },
];

function CardGrid({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <ColoredCard
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      bottom={item.bottom}
      color={item.color}
      navigation={navigation}
    />
  );

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
      }}
    >
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CardGrid;
