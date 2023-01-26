import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import {AppIcons} from '../Styles';
import {useSelector} from 'react-redux';
import {area} from '../asset/ListOfHouses';
import Slider from 'react-native-slider';

export default function Filter(props) {
  const [selected, setSelected] = useState([]);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const {X, Y} = useSelector(state => state);

  return (
    <KeyboardAvoidingView
      style={[styles.container, styles.shadow, {width: X / 1.1}]}>
      <Text style={[styles.title, {fontSize: X / 15}]}>Filter </Text>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.txtInput}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        containerStyle={{height: 150}}
        data={area}
        labelField="label"
        valueField="value"
        placeholder="Select Area"
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        // renderLeftIcon={() => (
        //   <AppIcons type="AntDesign" name="Safety" size={20} color="#737373" />
        // )}
      />
      <View style={styles.amount}>
        <Text style={[styles.txtInput, {fontSize: X / 27}]}>Max Amount</Text>
        <View style={styles.slider}>
          <Slider
            maximumValue={400000}
            value={max}
            onValueChange={value => setMax(Math.round(value))}
          />
        </View>
        <Text>{Math.round(max)}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={[styles.txtInput, {fontSize: X / 27}]}>Min Amount</Text>
        <View style={styles.slider}>
          <Slider
            maximumValue={400000}
            value={min}
            onValueChange={value => setMin(Math.round(value))}
          />
        </View>
        <Text>{Math.round(min)}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => props.apply(selected, max, min)}
          style={[styles.btn, {backgroundColor: '#4A777A'}]}>
          <Text style={[styles.txt, {fontSize: X / 25}]}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.cancel}
          style={[styles.btn, {backgroundColor: '#4A777A'}]}>
          <Text style={[styles.txt, {fontSize: X / 25}]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
  },
  dropdown: {
    height: 50,
    width: '90%',
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.6,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  btn: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  txt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.6,
    marginHorizontal: 5,
    width: '30%',
    padding: 0,
    borderColor: 'gray',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    marginVertical: 15,
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin: 10,
  },
  txtInput: {
    fontWeight: 'bold',
    color: 'gray',
  },
  slider: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
