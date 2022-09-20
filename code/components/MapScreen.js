import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
    } else if (location) {
      text = JSON.stringify(location);
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
            key: 'AIzaSyAjidtWOJG0-IGEW0bWmllye3UJbPj0oVo',
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
        style={styles.map} 
        initialRegion={{ 
          latitude: 64.1391803422148,
          longitude: -21.902778129778827,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
       
        mapPadding={{top: 100, bottom: 50}}
      >
        <Marker
          coordinate={{
            latitude: 64.1391803422148,
            longitude: -21.902778129778827,
          }}
          pinColor="black"
        >
          <Callout>
            <Text>Hallo</Text>
          </Callout>
        </Marker>
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