import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Theme } from "../../constants";
import { Picker } from "@react-native-picker/picker";
import { DataTable, Modal, Portal, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Language = {
  name: any;
  level: any;
};

export const levels = [
  { label: "Level 1", value: 1 },
  { label: "Level 2", value: 2 },
  { label: "Level 3", value: 3 },
  { label: "Level 4", value: 4 },
  { label: "Level 5", value: 5 },
  { label: "Level 6", value: 6 },
  { label: "Level 7", value: 7 },
];

const languages = [
  "Afrikaans",
  "English",
  "Ndebele",
  "Northern Sotho",
  "Southern Sotho",
  "Swazi",
  "Tsonga",
  "Tswana",
  "Venda",
  "Xhosa",
  "Zulu",
];

export function levelToWord(level: number) {
  switch (level) {
    case 1:
      return "0 - 29%";
    case 2:
      return "30 - 39%";
    case 3:
      return "40 - 49%";
    case 4:
      return "50 - 59%";
    case 5:
      return "60 - 69%";
    case 6:
      return "70 - 79%";
    case 7:
      return "80 - 100%";
    default:
      break;
  }
}

const storeLanguage = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("l_details", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const Preferences = ({ setCurrentStep }: any) => {
  const [language, setLanguage] = React.useState<Language[]>([]);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [selectedLevel, setSelectedLevel] = React.useState();
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
              Select your Language and Level
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
                Language
              </Text>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                {languages.map((language, i: number) => (
                  <Picker.Item key={i} label={language} value={language} />
                ))}
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
                selectedValue={selectedLevel}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLevel(itemValue)
                }
              >
                {levels.map((level) => (
                  <Picker.Item
                    key={level.value}
                    label={level.label}
                    value={level.value}
                  />
                ))}
              </Picker>
            </View>
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
            onPress={() => {
              setLanguage((prev) => [
                ...prev,
                { name: selectedLanguage, level: selectedLevel },
              ]);
              hideModal();
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
              Save
            </Text>
          </Pressable>
        </Modal>
      </Portal>
      {language?.length > 0 && (
        <View style={{ marginBottom: Theme.roundness.lg }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Subject</DataTable.Title>
              <DataTable.Title numeric>Percentage Range</DataTable.Title>
              <DataTable.Title numeric>Level</DataTable.Title>
            </DataTable.Header>
            {language.map((language, i) => (
              <DataTable.Row key={i}>
                <DataTable.Cell>{language.name}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {levelToWord(language.level)}
                </DataTable.Cell>
                <DataTable.Cell numeric>{language.level}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      )}
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
          if (language.length > 1) {
            storeLanguage(language);
            setCurrentStep(2);
          } else {
            showModal();
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
          {language?.length > 1
            ? "Next"
            : language?.length > 1
            ? "Add Home Language"
            : "Add Additional Language"}
        </Text>
      </Pressable>
    </View>
  );
};

export default Preferences;

const styles = StyleSheet.create({});
