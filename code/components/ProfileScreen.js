import * as React from 'react';
import { Text, View } from 'react-native';
import { ref, get, child } from 'firebase/database';


export function ProfileScreen() {
  get(child(ref(global.db), `users/${global.user["uid"]}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const user = snapshot.val();
    }else{
      const user = {}
    }
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{user["email"]}</Text>
    </View>
  );
}