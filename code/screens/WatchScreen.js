import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "../Style"
import { ref, get, child } from 'firebase/database';

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

export function WatchScreen() {
  return(
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center"}}>
        {global.allRides.map((ride) => {return renderRide(ride)}) /*breyti seinna*/}
        <TouchableOpacity
            onPress={()=>{global.stackNav.navigate("Plan")}}
            style={{
              borderRadius: 100,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              position: "absolute",
              right: 25,
              bottom: 25,
              backgroundColor: "#0782F9",
            }}
            >
            <Text style={styles.tripBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

