import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

const coordinates = [
  {
    latitude: 64.1391803422148,
    longitude: -21.902778129778827,
  },
  {
    latitude: 64.14167695211964, 
    longitude: -21.907331756753607,
  },
  {
    latitude: 64.13930669935749, 
    longitude: -21.90936911953227,
  }
]

export function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync(); // Biður um location frá notanda
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({}); // Fær location frá notanda
        setLocation(location);
      })();
    }, []);
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details.geometry.location, data.description);
          }}
          query={{
            key: 'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ',
            language: 'en',
          }}
          styles={{
            container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "0%" },
            listView: {backgroundColor: "white"}
          }}
        />
      <MapView 
        showsUserLocation={true}
        showsMyLocationButton={true}
        mapPadding={{top: 100, bottom: 50}}
        style={styles.map} 
        initialRegion={{ 
          latitude: 64.1391803422148,
          longitude: -21.902778129778827,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={coordinates[1]} />
        <Marker coordinate={coordinates[2]} />
        <MapViewDirections 
          origin={coordinates[0]}
          destination={coordinates[1]}
          waypoints={[coordinates[2]]}
          apikey={'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ'}
          strokeWidth={5}
          strokeColor="blue"
        />
      </MapView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  paragraph: {
    top: 500,
  }
});