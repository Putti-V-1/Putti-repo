import React, { useState, useEffect, useRef, Fragment } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

const rides = [
  {
    id: 1,
    origin:{
      latitude: 64.1391803422148,
      longitude: -21.902778129778827,
    },
    destination:{
      latitude: 64.14167695211964, 
      longitude: -21.907331756753607,
    }
  },
  {
    id: 2,
    origin:{
      latitude: 64.1391803422148,
      longitude: -21.902778129778827,
    },
    destination:{
      latitude: 64.13930669935749, 
      longitude: -21.90936911953227,
    }
  }
]

const initialRegion = {
  latitude: 64.1391803422148,
  longitude: -21.902778129778827,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
}

export function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const mapRef = useRef(null);
  const [active, setActive] = useState(-1);
  const rideList = rides.map((ride) =>
    <Fragment key={ride.id}>
      <MapViewDirections
      origin={ride.origin}
      destination={ride.destination}
      apikey={'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ'}
      strokeWidth={5}
      strokeColor={active == ride.id ? "blue" : "grey"}
      tappable={true}
      onPress={() => {
        setActive(ride.id)
      }}
      />
      <Marker 
      coordinate={ride.destination}
      onPress={() => {
        setActive(ride.id)
      }}
      > 
      <Callout onPress={() => {
        alert('Ferð valin')
      }}
      >
        <Text>Velja Ferð {ride.id}</Text>
      </Callout>
      </Marker>
    </Fragment>
  );

  useEffect(() => { // LocationRequest Hook
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

  useEffect(() => {
      if(!region) return;
      mapRef.current.animateToRegion(region,3 * 1000);
  })

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete // Search bar með autocomplete
          placeholder='Search'
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          styles={styles.search}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            //console.log(details.geometry.location.lat, data.description);
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            })
            console.log("region: ",region);
          }}
          query={{
            key: 'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ',
            language: 'en',
            components: 'country:is',
          }}
        />
      <MapView 
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        mapPadding={{top: 100, bottom: 50}}
        style={styles.map} 
        initialRegion={initialRegion}
        onPress={() => {
        }}
      >
        {rideList}
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
  search: {
    container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "0%" },
    listView: {backgroundColor: "white"}
  },
});