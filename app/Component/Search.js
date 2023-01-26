import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {AppIcons} from '../Styles';
import {useSelector} from 'react-redux';

export default function Search(props) {
  const {X, Y} = useSelector(state => state);
  return (
    <View style={[styles.search, styles.shadow, {width: props.width}]}>
      <TextInput placeholder="Search" style={{fontSize: X / 25, padding: 5}} />
      <AppIcons type="FontAwesome" name="search" size={18} color="#737373" />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',

    marginVertical: 15,

    alignItems: 'center',
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
});
