import React, {useState} from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Map(props) {
  const {X, Y} = useSelector(state => state);
  const [region, setRegion] = useState({
    latitude: 29.526855,
    longitude: 35.009289,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  });
  const onRegionChange = region => {
    // alert(JSON.stringify(region));
    setRegion(region);
  };
  return (
    <View
      style={{
        width: X,
        height: Y,
        alignItems: 'center',
      }}>
      <MapView
        style={{flex: 1, height: Y, width: X}}
        showsMyLocationButton={true}
        showsUserLocation={true}
        region={region}
        moveOnMarkerPress
        onRegionChangeComplete={onRegionChange}
      />
    </View>
  );
}
