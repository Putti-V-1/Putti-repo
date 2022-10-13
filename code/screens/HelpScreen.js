import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const helpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        paddingLeft: 75,
        fontSize: 20,
        marginBottom: 10,
        padding: 10,
      }}>notið eftirfanadi fyrir hjalp.</Text>
      <View style={styles.row}>
        <Icon name="envelope" size={30} color="#FFFFFF" />
          <Text style={{color:"#FFFFFF", marginLeft: 10, fontSize: 30}}>email@email.email</Text>
        </View>
        <View style={styles.row}>
        <Icon name="phone" size={37} color="#FFFFFF" />
          <Text style={{color:"#FFFFFF", marginLeft: 10, fontSize: 30}}>1234567</Text>
        </View>
    </View>
  );
}
export default helpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4a518a',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
});
