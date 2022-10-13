import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

function renderRide(ride){
  return (
    <TouchableOpacity style={{borderWidth: "1px", marginTop: 12, borderRadius: 10, width: "85%", padding: 5}}>
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
  console.log(global.bookedRides)
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center"}}>
        {global.allRides.map((ride) => {return renderRide(ride)}) /*breyti seinna*/}
      </View>
    </ScrollView>
  );
}