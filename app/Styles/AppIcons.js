import React, {useEffect} from 'react';
import {default as Entypo} from 'react-native-vector-icons/dist/Entypo';
import {default as AntDesign} from 'react-native-vector-icons/dist/AntDesign';
import {default as Feather} from 'react-native-vector-icons/dist/Feather';
import {default as Ionicons} from 'react-native-vector-icons/dist/Ionicons';
import {default as FontAwesome} from 'react-native-vector-icons/dist/FontAwesome';
import {default as FontAwesome5} from 'react-native-vector-icons/dist/FontAwesome5';
import {default as MaterialIcons} from 'react-native-vector-icons/dist/MaterialIcons';
import {default as MaterialCommunityIcons} from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {default as Fontisto} from 'react-native-vector-icons/dist/Fontisto';
import {default as EvilIcons} from 'react-native-vector-icons/dist/EvilIcons';
import {default as Octicons} from 'react-native-vector-icons/dist/Octicons';
import {default as Foundation} from 'react-native-vector-icons/dist/Foundation';

export default function ({type, name, color, style, size, onPress}) {
  switch (type) {
    case 'Entypo':
      return (
        <Entypo
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );

    case 'Zocial':
      return (
        <Zocial
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    case 'FontAwesome5_Regular':
      return (
        <FontAwesome5_Regular
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );
    // case "FontAwesome5_Solid": return (<FontAwesome5_Solid name={name} color={color} style={style} size={size}    onPress={onPress}       />);
    case 'Foundation':
      return (
        <Foundation
          name={name}
          color={color}
          style={style}
          size={size}
          onPress={onPress}
        />
      );

    default:
      return <Text>404</Text>;
  }
}
