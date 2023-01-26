import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import AppIcons from '../Styles/AppIcons';
import Carousel from 'react-native-reanimated-carousel';

export default function Product(props) {
  const {X, Y} = useSelector(state => state);
  const entries = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ];
  return (
    <TouchableOpacity
      style={[{width: X / 2.3, height: X / 1.5}, styles.shadow, styles.card]}>
      <Image
        style={{
          width: '100%',
          height: X / 1.5,
          borderRadius: 20,
          // marginHorizontal: 10,
        }}
        resizeMode="cover"
        source={{
          uri: props.image,
        }}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          height: '95%',
          zIndex: 10,
          position: 'absolute',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={[styles.text, {fontSize: X / 24}]}>
          {props.productName}
        </Text>
        <Text style={[styles.text, {fontSize: X / 25, color: 'red'}]}>
          {props.price}
          {'$'}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          opacity: 0.6,
          bottom: 0,
          height: '25%',
          width: '100%',
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    margin: 10,
    marginVertical: 20,
    backgroundColor: '#fff',
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
  text: {
    fontWeight: 'bold',

    textAlign: 'center',
  },
});
