import React from 'react';
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Product from '../../Component/Product';
import Search from '../../Component/Search';
import Carousel from 'react-native-reanimated-carousel';
import Categories from '../../Component/Categories';
import {listOfHouses} from '../../asset/ListOfHouses';
import {AppIcons} from '../../Styles';

export default function HomePage(props) {
  const {X, Y} = useSelector(state => state);
  const entries = [
    'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1496328488450-9c5c5d555148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  ];
  return (
    <View style={{width: X, height: Y, alignItems: 'center'}}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/76/36/fd/7636fd0fd200dabfb8a312d4838dfac8.jpg',
        }}
        style={{height: Y, width: X}}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.txt, {fontSize: X / 15}]}>
            Find your Home {'\n'}In Minutes
          </Text>
          <AppIcons
            type="Entypo"
            name="menu"
            size={30}
            color="#fff"
            style={{marginHorizontal: 25}}
            onPress={() => props.navigation?.openDrawer()}
          />
        </View>
        <Search width={X / 1.1} {...props} />
        <ScrollView
          nestedScrollEnabled={true}
          style={[styles.scroll, {height: Y}]}>
          <View style={[styles.item, styles.shadow, {width: X / 1.1}]}>
            <Carousel
              width={X / 1.1}
              height={170}
              loop={true}
              style={styles.Carousel}
              autoPlay
              scrollAnimationDuration={1000}
              data={entries}
              renderItem={({item}) => (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={{uri: item}}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                    resizeMode="cover"
                  />
                </View>
              )}
            />
          </View>
          <Text
            style={{
              fontSize: X / 24,
              color: '#737373',
              fontWeight: 'bold',
              marginVertical: 15,
              marginHorizontal: 15,
              alignSelf: 'flex-start',
            }}>
            Categories
          </Text>
          <Categories {...props} />

          <Text
            style={{
              fontSize: X / 24,
              color: '#737373',
              fontWeight: 'bold',
              marginTop: 30,
              marginHorizontal: 15,
              alignSelf: 'flex-start',
            }}>
            For You
          </Text>
          <ScrollView horizontal>
            {listOfHouses.map((item, index) => (
              <Product
                key={index}
                image={item.imgs[0]}
                productName={item.title}
                price={item.price}
                {...props}
              />
            ))}
          </ScrollView>

          <View style={{height: 400}} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 25,
    marginBottom: 10,
  },
  container: {
    position: 'absolute',
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
  item: {
    height: 170,
    borderRadius: 10,
    marginTop: 5,
    justifyContent: 'flex-end',
    marginVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  Carousel: {
    borderRadius: 10,
    alignItems: 'center',
  },
});
