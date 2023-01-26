import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AppIcons from '../Styles/AppIcons';

export default function HorizantalProduct(props) {
  const {X, Y} = useSelector(state => state);
  const [isSelected, setIsSelected] = useState(true);
  const [type, setType] = useState(props.type);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.card,
        styles.shadow,
        {width: props.width, height: X / 3.9},
      ]}>
      <Image
        style={{width: '35%', height: '100%', borderRadius: 10}}
        source={{
          uri: props.image,
        }}
      />
      <View
        style={[
          styles.card,
          {justifyContent: 'space-between', width: '63%', paddingHorizontal: 7},
        ]}>
        <View
          style={{
            width: type != 'WishList' ? '100%' : '60%',
            alignItems: 'flex-end',
          }}>
          <Text style={styles.text}>
            {props.productName} ({props.area})
          </Text>
          <Text style={[styles.text, {marginBottom: 7}]}>{props.price}$</Text>
        </View>
        <TouchableOpacity>
          {type == 'WishList' && (
            <AppIcons
              type="MaterialIcons"
              name="favorite"
              size={25}
              color="red"
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 7,
    marginHorizontal: 10,
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
