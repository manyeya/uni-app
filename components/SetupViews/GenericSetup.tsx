import { View, Text } from "react-native";
import { Headline } from "react-native-paper";
import { Theme } from "../../constants";

type GenericSetupProps = {
  children: React.ReactNode;
  title: string;
};

function GenericSetup({ children, title }: GenericSetupProps) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 16,
      }}
    >
      <Headline style={{ color: Theme.colors.text.primary }}>{title}</Headline>
      <View
        style={{
          paddingVertical: 16,
        }}
      >
        {children}
      </View>
    </View>
  );
}

export default GenericSetup;
