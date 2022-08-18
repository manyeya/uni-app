import React from "react";
import Wizard from "react-native-ui-lib/src/components/wizard";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericSetup from "../components/SetupViews/GenericSetup";
import { Theme } from "../constants";
import PersonalDetails from "../components/SetupViews/PersonalDetails";
import AcademicDetails from "../components/SetupViews/AcademicDetails";
import Preferences from "../components/SetupViews/LanguagePreferences";

function stepSelector(step: number, currentStep: Function, navigation?: any) {
  switch (step) {
    case 0:
      return (
        <GenericSetup title="Let's Start By Getting Your Personal Information">
          <PersonalDetails setCurrentStep={currentStep} />
        </GenericSetup>
      );
    case 1:
      return (
        <GenericSetup title="Select Your Home language And Additional Language">
          <Preferences setCurrentStep={currentStep} />
        </GenericSetup>
      );
    case 2:
      return (
        <GenericSetup title="Lastly,Let's Get Your Electives Subjects">
          <AcademicDetails navigation={navigation} />
        </GenericSetup>
      );
  }
}

function Setup({ navigation }: any) {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <SafeAreaView>
      <Wizard
        activeIndex={currentStep}
        onActiveIndexChanged={() => console.log("changed")}
      >
        {["Personal Details", "Languages", "Academic Details"].map(
          (item, index) => (
            <Wizard.Step
              indexLabelStyle={{
                color: Theme.colors.primary,
              }}
              circleSize={40}
              circleColor={Theme.colors.primary}
              key={index}
              label={item}
            />
          )
        )}
      </Wizard>
      {stepSelector(currentStep, setCurrentStep, navigation)}
    </SafeAreaView>
  );
}

export default Setup;
