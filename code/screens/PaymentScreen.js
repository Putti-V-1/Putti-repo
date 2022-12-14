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
      }}>vinsamlegast settu inn kortanumer.</Text>
        </View>
        <View style={styles.action}>
          <Icon name="credit-card" size={20}  color='#05375a'/>
          <TextInput
            placeholder="Korta Numer"
            placeholderTextColor="#05375a"
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
          <Icon name="credit-card" size={20}  color='#05375a'/>
          <TextInput
            placeholder="rennur ut"
            placeholderTextColor="#05375a"
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
          <Icon name="credit-card" size={20}  color='#05375a'/>
          <TextInput
            placeholder="cvs"
            placeholderTextColor="#05375a"
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
      backgroundColor: '#FFFFFF',
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
