import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, RecyclerViewBackedScrollViewComponent } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const initialRegion = {
    latitude: 64.1391803422148,
    longitude: -21.902778129778827,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
}

export function RequestRideScreen({route}) {
  const {ride} = route.params;
  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      style={styles.map}
      >
        <Marker coordinate={ride.destination}/>
        <MapViewDirections
            origin={ride.origin}
            destination={ride.destination}
            apikey={'AIzaSyAR-R6U3YWpLsuqcAV85z-H-X6mBBdIFnQ'}
            strokeWidth={5}
            strokeColor={"blue"}
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
    search: {
      container: {flex: 0, position: "absolute", width: "100%", zIndex: 1, top: "0%" },
      listView: {backgroundColor: "white"}
    },
});

export default RequestRideScreen;