import * as React from "react";
import { BottomNavigation, Headline, Text } from "react-native-paper";
import Home from "../screens/Home/Home";
import Report from "../screens/Report";
import User from "../screens/User";

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Nav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: Report,
    recents: User,
  });
 
  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={{ backgroundColor: "#fff" }}
      />

  );
};

export default Nav;
