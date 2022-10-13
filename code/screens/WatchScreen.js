import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "../Style"
import { ref, get, child } from 'firebase/database';

function renderRide(ride){
  return (
    <TouchableOpacity style={{borderBottomWidth: "1px"}}>
      <Text>
        Driver: {ride.child("driver").val()}
      </Text>
      <Text>
        Time: {ride.child("time").val()}
      </Text>
    </TouchableOpacity>
  )
}

export function WatchScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
  )
}

