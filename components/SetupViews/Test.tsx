import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Colors,
  Icon,
  Dialog,
  Text,
  Picker,
  Avatar,
  Assets,
  PanningProvider,
  Typography,
  PickerProps,
  PickerMethods,
  DialogProps,
  Button
} from 'react-native-ui-lib'; //eslint-disable-line
import { PickerSingleValue } from 'react-native-ui-lib/src/components/picker/types';

const options = [
  {label: 'JavaScript', value: 'js'},
  {label: 'Java', value: 'java'},
  {label: 'Python', value: 'python'},
  {label: 'C++', value: 'c++', disabled: true},
  {label: 'Perl', value: 'perl'}
];
const filters = [
  {label: 'All', value: 0},
  {label: 'Draft', value: 1},
  {label: 'Published', value: 2},
  {label: 'Scheduled', value: 3}
];

const schemes = [
  {label: 'Default', value: 1},
  {label: 'Light', value: 2},
  {label: 'Dark', value: 3}
];

export default class PickerScreen extends Component {
  picker = React.createRef<PickerMethods>();
  state = {
    itemsCount: 1,
    // language: {value: 'java', label: 'Java'},
    language: undefined,
    language2: options[2].value, // for migrated picker example
    languages: [],
    nativePickerValue: 'java',
    customModalValues: [],
    filter: filters[0],
    scheme: schemes[0].value,
    contact: 0
  };

  dialogHeader: DialogProps['renderPannableHeader'] = props => {
    const {title} = props;
    return (
      <Text margin-15 text60 $textDefault>
        {title}
      </Text>
    );
  };

  renderDialog: PickerProps['renderCustomModal'] = modalProps => {
    const {visible, children, toggleModal, onDone} = modalProps;

    return (
      <Dialog
        visible={visible}
        onDismiss={() => {
          onDone();
          toggleModal(false);
        }}
        width="100%"
        height="45%"
        bottom
        useSafeArea
        containerStyle={{backgroundColor: Colors.$backgroundDefault}}
        renderPannableHeader={this.dialogHeader}
        panDirection={PanningProvider.Directions.DOWN}
        pannableHeaderProps={{title: 'Custom modal'}}
      >
        <ScrollView>{children}</ScrollView>
      </Dialog>
    );
  };

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <View flex padding-20>
          <Text text40 $textDefault>
            Picker
          </Text>
          <Picker
            placeholder="Favorite Language"
            floatingPlaceholder
            value={this.state.language}
            enableModalBlur={false}
            onChange={(item: any) => this.setState({language: item})}
            topBarProps={{title: 'Languages'}}
            // style={{color: Colors.red20}}
            showSearch
            searchPlaceholder={'Search a language'}
            // onSearchChange={value => console.warn('value', value)}
            migrateTextField
          >
            {/* {_.map(longOptions, (option: PickerSingleValue) => (
              <Picker.Item key={option.value} value={option} label={''} disabled={option.disabled}/>
            ))} */}
          </Picker>
        </View>
      </ScrollView>
    );
  }
}