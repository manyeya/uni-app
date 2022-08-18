import React from "react";
import {
  View,
  Image,
  useWindowDimensions,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Theme } from "../constants";

function ColoredCard({
  title,
  subtitle,
  image,
  bottom,
  color,
  navigation,
}: any) {
  const HEIGHT = useWindowDimensions().height * 0.25;
  const WIDTH = useWindowDimensions().width * 0.45;
  const TOPBOTTOM =
    bottom === true ? { left: 0, bottom: 0 } : { left: 0, top: 0 };

  return (
    <Pressable
      style={{
        width: WIDTH,
        height: HEIGHT,
        margin: 8,
        borderRadius: Theme.roundness.md,
        overflow: "hidden",
        position: "relative",
      }}
      android_ripple={{
        color: "white",
        radius: Theme.roundness.md,
        foreground: true,
      }}
      onPress={() => navigation.navigate(title)}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={image}
      />
      <View
        style={{
          ...styles.textContainer,
          ...TOPBOTTOM,
        }}
      >
        <Text style={{ color: color, fontSize: 20, fontWeight: "600" }}>
          {title}
        </Text>
        <Text style={{ color: color, fontSize: 14 }}>{subtitle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    overflow: "hidden",
    position: "absolute",
    padding: 16,
  },
});

export default ColoredCard;
