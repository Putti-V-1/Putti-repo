import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.action}>
        <Text style={{
        paddingLeft: 50,
        fontSize: 20,
        marginBottom: 10,
        padding: 10,
      }}>Vinsamlegast settu inn kortanúmer.</Text>
        </View>
        <View style={styles.action}>
          <Icon name="card" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="Korta Numer"
            placeholderTextColor="#FFFFFF"
            keyboardType='number-pad'
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 13,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="card" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="rennur ut"
            placeholderTextColor="#FFFFFF"
            keyboardType='number-pad'
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 13,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="card" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="cvs"
            placeholderTextColor="#FFFFFF"
            keyboardType='number-pad'
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 13,
              color: '#05375a',
            }}          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Vista!</Text>
        </TouchableOpacity>
    </View>
    
  );
}
export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bd972f',
      },
    action: {
    flexDirection: 'row',
    marginTop: 10,
    marginButtom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    },
    panelButtonTitle: {
        fontSize: 22,
        paddingLeft: 305,
        paddingTop: 10,
        fontWeight: 'bold',
        color: 'green',
    },
});
