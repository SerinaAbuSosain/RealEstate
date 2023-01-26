import React, {useRef, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import {area, listOfHouses} from '../../asset/ListOfHouses';

export default function HouseDetails(props) {
  const {X, Y} = useSelector(state => state);
  const [visible, setIsVisible] = useState(false);
  return (
    <View style={[styles.container, {width: X}]}>
      <Carousel
        width={X}
        height={250}
        style={styles.Carousel}
        snapEnabled
        onSnapToItem={index => console.log('current index:', index)}
        withAnimation={{
          type: 'spring',
          config: {
            damping: 13,
          },
        }}
        autoPlay
        mode="parallax"
        scrollAnimationDuration={1000}
        data={listOfHouses[0].imgs}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              props.cancel(),
                props.navigation.navigate('ShowImage', {
                  img: listOfHouses[0].imgs,
                });
            }}
            style={[styles.home, styles.shadow]}>
            <Image style={styles.image} source={{uri: item}} />
          </Pressable>
        )}
      />

      <ScrollView
        style={{
          padding: 20,
          width: X,
          maxHeight: X / 1.1,
          zIndex: 30,
          elevation: 50,
        }}>
        <View style={[styles.saler, {justifyContent: 'space-between'}]}>
          <View style={styles.saler}>
            <Image
              source={{uri: listOfHouses[0].profile}}
              style={styles.img}
              resizeMode="cover"
            />
            <Text style={[styles.txt, {fontSize: X / 25}]}>
              {listOfHouses[0].saler}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.cancel(), props.navigation.navigate('Map');
            }}>
            <Image
              source={require('../../asset/images/mapicon.jpg')}
              style={{height: 60, width: 60}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.txt, {fontSize: X / 25}]}>
          {' '}
          Country : {area[listOfHouses[0].areaId - 1].label}
        </Text>

        <Text style={[styles.txt, {fontSize: X / 25}]}>
          {' '}
          Area : {listOfHouses[0].area}
        </Text>
        <Text style={[styles.txt, {fontSize: X / 25}]}>
          {' '}
          Title : {listOfHouses[0].title}
        </Text>
        <Text style={[styles.txt, {fontSize: X / 25}]}>
          {' '}
          Details : {listOfHouses[0].details}
        </Text>
        <Text style={[styles.txt, {fontSize: X / 25}]}>
          {' '}
          Price : {listOfHouses[0].price}
          {'$'}
        </Text>

        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  Carousel: {
    borderRadius: 10,
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  saler: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  home: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 230,
    //padding:5,
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {margin: 10, fontWeight: 'bold'},
});
