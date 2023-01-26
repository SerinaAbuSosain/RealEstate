import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Categories(props) {
  const {X, Y} = useSelector(state => state);

  const categories = [
    {
      img: require('../asset/images/rent.png'),
      onPress: () => props.navigation.navigate('Houses', {type: 'Rent'}),
    },
    {
      img: require('../asset/images/sale.png'),
      onPress: () => props.navigation.navigate('Houses', {type: 'Sale'}),
    },
  ];
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.cart,
            styles.shadow,
            {width: X / 2.5, height: X / 2.5},
          ]}
          key={index}
          onPress={item.onPress}>
          <Image
            style={[{width: X / 2.6, height: X / 2.6}]}
            resizeMode="contain"
            source={item.img}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cart: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
