import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Lottie from 'lottie-react-native';

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('MyDrawer'), 500);
  }, []);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          //opacity: 0.6,
          backgroundColor: '#000',
        }}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/47/87/4a/47874a3e255225aa6effc7e5f93be728.jpg',
          }}
          // source={require('../../asset/images/wall.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          height: '70%',
          width: '70%',
        }}>
        <Lottie
          source={require('../../asset/127559-home-location')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}
