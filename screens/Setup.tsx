import React from "react";
import Wizard from "react-native-ui-lib/src/components/wizard";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericSetup from "../components/SetupViews/GenericSetup";
import { Theme } from "../constants";
import PersonalDetails from "../components/SetupViews/PersonalDetails";
import AcademicDetails from "../components/SetupViews/AcademicDetails";

function stepSelector(step: number,currentStep:Function) {
  switch (step) {
    case 0:
      return (
        <GenericSetup title="Let's Start By Getting Your Personal Information">
          <PersonalDetails setCurrentStep={currentStep}/>
        </GenericSetup>
      );
    case 1:
      return (
        <GenericSetup title="Lastly,Let's Get Your Academic Details">
          <AcademicDetails/>
        </GenericSetup>
      );
  }
}

function Setup() {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <SafeAreaView>
      <Wizard
        activeIndex={currentStep}
        onActiveIndexChanged={() => console.log("changed")}
      >
        {["Personal Details", "Academic Details"].map(
          (item, index) => (
            <Wizard.Step
              indexLabelStyle={{
                color:Theme.colors.primary
              }}
              circleSize={40}
              circleColor={Theme.colors.primary}
              key={index}
              label={item}
            />
          )
        )}
      </Wizard>
      {stepSelector(currentStep,setCurrentStep)}
    </SafeAreaView>
  );
}

export default Setup;
