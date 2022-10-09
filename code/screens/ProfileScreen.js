import * as React from "react";
import {Image, View, StyleSheet, SafeAreaView } from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import logo from './assets/logo.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image 
          source={logo}  
          style={{width: 100, height: 100, borderRadius: 400/ 2}} 
        />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>ok i pull up</Title>
            <Caption style={styles.caption}>@okipullup</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <Icon name="map-marker" size={17} color="#900" />
          <Text style={{color:"#777777", marginLeft: 20}}>Reykjavik, iceland</Text>
        </View>
        <View style={styles.row}>
        <Icon name="phone" size={15} color="#900" />
          <Text style={{color:"#777777", marginLeft: 20}}>5812345</Text>
        </View>
        <View style={styles.row}>
        <Icon name="desktop" size={12} color="#900" />
          <Text style={{color:"#777777", marginLeft: 20}}>email@email.email</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeigt: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    dontSize: 16,
    lineHeight: 26
  },
})