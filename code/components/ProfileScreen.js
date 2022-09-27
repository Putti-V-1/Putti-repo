import * as React from 'react';
import { Text, View } from 'react-native';
import { ref, get, child } from 'firebase/database';


export function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{global.user["email"]}</Text>
    </View>
  );
}