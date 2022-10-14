import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

function renderRide(ride){
  return (
    <TouchableOpacity style={{borderWidth: "1px", marginTop: 12, borderRadius: 10, width: "85%", padding: 5}} key={ride.child("id").val()}>
      <Text>
        From: {ride.child("origin").child("address").val()}
      </Text>
      <Text>
        To: {ride.child("destination").child("address").val()}
      </Text>
      <Text>
        Time: {ride.child("time").val()}
      </Text>
    </TouchableOpacity>
  )
}

export function BookedScreen() {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center"}}>
        {global.allRides.map((ride) => {return renderRide(ride)}) /*breyti seinna*/}
      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
});
