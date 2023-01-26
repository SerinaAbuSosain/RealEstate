import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import {Modal, SlideAnimation, ModalContent} from 'react-native-modals';

import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HorizantalProduct from '../../Component/HorizantalProduct';
import Search from '../../Component/Search';
import {AppIcons} from '../../Styles';
import Filter from '../../Component/Filter';
import {area, listOfHouses} from '../../asset/ListOfHouses';
import HouseDetails from './HouseDetails';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function Houses(props) {
  const {X, Y} = useSelector(state => state);
  const route = useRoute();
  const type = route.params.type;
  const [listOfHome, setListOfHome] = useState(listOfHouses);
  const [modalVisible, setModalVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function apply(selected, max, min) {
    setModalVisible(false);

    if (selected == [] && max == 0 && min == 0) {
      setListOfHome(listOfHouses);
      console.log('selectes', selected, 'max', max, 'min', min);
    } else {
      let homes = [];
      homes = listOfHouses.filter(
        e =>
          (selected != [] && selected.includes(e.areaId.toString())) ||
          (min != 0 && e.price >= min && max != 0 && e.price <= max),
      );
      setListOfHome(homes);
      console.log('error');
    }
    console.log('selectes', selected, 'max', max, 'min', min);
  }

  return (
    <View style={{width: X, height: Y, alignItems: 'center'}}>
      <Modal
        visible={modalVisible}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'right',
          })
        }>
        <Filter
          apply={apply}
          cancel={() => setModalVisible(false)}
          {...props}
        />
      </Modal>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/76/36/fd/7636fd0fd200dabfb8a312d4838dfac8.jpg',
        }}
        style={{height: Y, width: X}}
      />
      <View style={[styles.container, {height: Y, width: X}]}>
        <Text style={[styles.txt, {fontSize: X / 15}]}>{type}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Search width={X / 1.3} {...props} />
          <AppIcons
            type="FontAwesome"
            name="filter"
            size={25}
            color="#fff"
            onPress={() => setModalVisible(true)}
          />
        </View>
        <ScrollView nestedScrollEnabled={true} style={styles.scroll}>
          {listOfHome.map((item, index) => (
            <HorizantalProduct
              key={index}
              // type="Cart"
              image={item.imgs[0]}
              productName={item.title}
              price={item.price}
              area={area[item.areaId - 1].label}
              onPress={() => setShowDetails(true)}
              {...props}
            />
          ))}
          <Modal
            hasOverlay
            visible={showDetails}
            swipeDirection={['down']} // can be string or an array
            swipeThreshold={200} // default 100
            style={{
              justifyContent: 'flex-end',
              height: Y,
              backgroundColor: 'transparent',
            }}
            onSwipeOut={event => {
              setShowDetails(!showDetails);
            }}>
            <HouseDetails cancel={() => setShowDetails(false)} {...props} />
          </Modal>
          <View style={{height: 200}} />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 25,
    marginBottom: 10,
  },
  container: {
    position: 'absolute',
    paddingVertical: 10,
  },
  scroll: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
