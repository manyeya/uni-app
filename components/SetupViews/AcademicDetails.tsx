import { View, Pressable } from "react-native";
import React, { useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Language, levels, levelToWord } from "./LanguagePreferences";

export type Subject = {
  name: any;
  level: any;
};

const el_subjects = [
  "Accounting",
  "Agricultural Management Practices",
  "Agricultural Sciences",
  "Agricultural Technology",
  "Business Studies",
  "Civil Technology",
  "Computer Applications Technology",
  "Consumer Studies",
  "Dance Studies",
  "Design",
  "Dramatic Arts",
  "Economics",
  "Electrical Technology",
  "Engineering Graphics & Design",
  "Geography",
  "History",
  "Hospitality Studies",
  "Information Technology",
  "Life Sciences",
  "Mechanical Technology",
  "Music",
  "Physical Science",
  "Religion Studies",
  "Tourism",
  "Visual Arts",
];

const storeSubjects = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("s_details", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const firstTime = async (value: any) => {
  try {
    await AsyncStorage.setItem("new", `${value}`);
  } catch (e) {
    console.log(e);
  }
};

const AcademicDetails = ({ navigation }: any) => {
  const [visible, setVisible] = React.useState(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [selectedSubject, setSelectedSubject] = React.useState(el_subjects[3]);
  const [language, setLanguage] = React.useState<Language[]>([]);
  const [subjects, setSubject] = React.useState<Subject[]>([]);
  const [selectedLevel, setSelectedLevel] = React.useState(1);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("l_details");
      return value != null ? setLanguage(JSON.parse(value)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [subjects]);

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
                selectedValue={selectedSubject}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedSubject(itemValue)
                }
              >
                {el_subjects.map((subject, i: number) => (
                  <Picker.Item key={i} label={subject} value={subject} />
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
              setSubject((prev) => [
                ...prev,
                { name: selectedSubject, level: selectedLevel },
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
          {subjects.map((subject, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>{subject.name}</DataTable.Cell>
              <DataTable.Cell numeric>
                {levelToWord(subject.level)}
              </DataTable.Cell>
              <DataTable.Cell numeric>{subject.level}</DataTable.Cell>
            </DataTable.Row>
          ))}
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
        onPress={async () => {
          if (subjects.length > 4) {
            storeSubjects(subjects);
            await firstTime(true);
            navigation.navigate("Nav");
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
          {subjects?.length > 4 ? "Let's Go" : "Add Subject"}
        </Text>
      </Pressable>
    </View>
  );
};

export default AcademicDetails;
