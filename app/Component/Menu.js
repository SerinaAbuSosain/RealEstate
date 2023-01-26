import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppIcons from '../Styles/AppIcons';
import {useSelector} from 'react-redux';

export default function Menu(props) {
  const [currentTab, setCurrentTab] = useState(0);
  const [actions, setActions] = useState([
    {title: 'Home', icon: 'home', action: () => null},

    {
      title: 'Settings',
      icon: 'setting',
      action: () => props.navigation.navigate('Settings'),
    },
    {title: 'pravicy', icon: 'setting', action: () => null},
    {title: 'About Us', icon: 'infocirlce', action: () => null},
  ]);
  const {X, Y} = useSelector(state => state);

  return (
    <View style={[styles.container, styles.shadow, {backgroundColor: '#fff'}]}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={[styles.name, {fontSize: X / 24, marginTop: 5}]}>
          test
        </Text>
      </View>
      <View style={styles.menu}>
        {actions.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor: currentTab != index ? '#515c5d' : '#fff',
              },
            ]}
            key={index}>
            <AppIcons
              type="AntDesign"
              name={item.icon}
              size={28}
              color={currentTab == index ? '#515c5d' : '#fff'}
            />
            <Text
              style={[
                styles.name,
                {
                  fontSize: X / 24,
                  color: currentTab == index ? '#515c5d' : '#fff',
                  marginHorizontal: 15,
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a274e',
    //padding: 15,
    borderBottomRightRadius: 1000,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 90,
  },
  profile: {
    //flexDirection: 'row',
    // alignItems: 'center',
    padding: 25,
    backgroundColor: '#515c5d',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    // backgroundColor: 'green',
  },
  menu: {margin: 20},
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
