import * as React from 'react';
import { Text, View , TouchableOpacity, ImageBackground, TextInput, StyleSheet, Platform} from 'react-native';
import logo from './assets/logo.jpg';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';


const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
              <View style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                    <ImageBackground
                    source={logo}
                    style={{height:100, width:100}}
                    imageStyle={{borderRadius: 15}}
                    >
                      <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                        <Icon name="camera" size={38} color='#fff' style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }} />
                      </View>
                    </ImageBackground>
              </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            oki pullup
            </Text>
        </View>

        <View style={styles.action}>
          <Icon name="user-o" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="fornafn"
            placeholderTextColor="#FFFFFF"
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 13,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="user-o" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="eftirnafn"
            placeholderTextColor="#FFFFFF"
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 13,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="phone" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="Simi"
            placeholderTextColor="#FFFFFF"
            keyboardType='number-pad'
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 15,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="envelope" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="Email"
            margin
            placeholderTextColor="#FFFFFF"
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 10,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="question" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="aldur"
            margin
            placeholderTextColor="#FFFFFF"
            keyboardType='number-pad'
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 20,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="globe" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="tungumal"
            margin
            placeholderTextColor="#FFFFFF"
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 12,
              color: '#05375a',
            }}          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker" size={20}  color='#FFFFFF'/>
          <TextInput
            placeholder="stadsettning"
            placeholderTextColor="#FFFFFF"
            autoCorrect={false}
            style={{
              flex: 1,
              marginTop: 10,
              paddingLeft: 20,
              color: '#05375a',
            }}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Vista!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99AAb5',
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panerHandle: {
      width: 40,
      height: 8,
      boderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 22,
      paddingLeft: 280,
      paddingTop: 10,
      fontWeight: 'bold',
      color: 'green',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginButtom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
});
