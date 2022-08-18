import { View, Pressable } from "react-native";
import React from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  DataTable,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Theme } from "../../constants";

const AcademicDetails = () => {
  const [text, setText] = React.useState("");
  const [visible, setVisible] = React.useState(true);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          style={{
            padding: 20,
            borderRadius: Theme.roundness.lg,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              borderRadius: Theme.roundness.lg,
              padding: Theme.roundness.sm,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: Theme.colors.text.primary,
                marginBottom: Theme.roundness.lg,
              }}
              variant="titleLarge"
            >
              Select your subject and level
            </Text>
            <View
              style={{
                marginBottom: Theme.roundness.lg,
              }}
            >
              <Text
                style={{ color: Theme.colors.primary }}
                variant="titleMedium"
              >
                Subject
              </Text>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View>
              <Text
                style={{ color: Theme.colors.primary }}
                variant="titleMedium"
              >
                Level
              </Text>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
        </Modal>
      </Portal>

      <View style={{ marginBottom: Theme.roundness.lg }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Subject</DataTable.Title>
            <DataTable.Title numeric>Percentage Range</DataTable.Title>
            <DataTable.Title numeric>Level</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Physical Science</DataTable.Cell>
            <DataTable.Cell numeric>70 - 79%</DataTable.Cell>
            <DataTable.Cell numeric>6</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
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
        onPress={() => {}}
      >
        <Text
          style={{
            color: Theme.colors.text.primary,
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Add Subject
        </Text>
      </Pressable>
    </View>
  );
};

export default AcademicDetails;
