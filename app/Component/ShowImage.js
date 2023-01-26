import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function ShowImage() {
  const {img} = useRoute().params;
  const {X, Y} = useSelector(state => state);
  console.log(img);
  return (
    <View style={{width: X, height: Y, backgroundColor: '#000'}}>
      <ScrollView horizontal>
        {img.map(item => (
          <Image
            source={{uri: item}}
            style={{width: X, height: Y, flex: 1}}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </View>
  );
}
