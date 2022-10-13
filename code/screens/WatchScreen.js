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
          //style={styles.tripBtn}
          >
          <Text style={styles.tripBtnText}>Skra ferð</Text>
      </TouchableOpacity>
    </View>
  )
}

