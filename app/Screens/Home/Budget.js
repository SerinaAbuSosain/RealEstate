import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';
import HorizantalProduct from '../../Component/HorizantalProduct';
import {area, listOfHouses} from '../../asset/ListOfHouses';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import HouseDetails from './HouseDetails';
import Modal from 'react-native-modals';

export default function Budget(props) {
  const {X, Y} = useSelector(state => state);
  const [listOfHome, setListOfHome] = useState([]);
  const [budget, setBudget] = useState(0);
  const [fill, setFill] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function apply(budget) {
    let homes = [];
    homes = listOfHouses.filter(e => e.price <= budget);
    setListOfHome(homes);
    setFill(budget * 0.001 > 100 ? 100 : budget * 0.001);
  }

  return (
    <View style={{width: X, height: Y, alignItems: 'center'}}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/76/36/fd/7636fd0fd200dabfb8a312d4838dfac8.jpg',
        }}
        style={{height: Y, width: X}}
      />
      <View style={[styles.container, {height: Y, width: X}]}>
        <Text style={[styles.txt, {fontSize: X / 15}]}>
          Calculate your budget
        </Text>

        <ScrollView nestedScrollEnabled={true} style={styles.scroll}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={[styles.txt, {fontSize: X / 24, color: 'gray'}]}>
              enter your budget
            </Text>
            <View style={[styles.search, {width: props.width}]}>
              <TextInput
                value={budget}
                onChangeText={apply}
                style={{fontSize: X / 25, padding: 5, width: X / 3}}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <AnimatedCircularProgress
              size={200}
              width={15}
              fill={fill}
              an
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {fill => (
                <Text style={[styles.txt, {fontSize: X / 20, color: 'gray'}]}>
                  {fill}
                  {'%'}
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
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
    paddingVertical: 20,
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
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 0.8,
    marginVertical: 15,

    alignItems: 'center',
  },
});
