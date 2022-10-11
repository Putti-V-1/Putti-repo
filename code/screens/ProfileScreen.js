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
            }]}>oki pullup</Title>
            <Caption style={styles.caption}>@okipullup</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <Icon name="map-marker" size={19} color="#23272A" />
          <Text style={{color:"#777777", marginLeft: 20}}>Reykjavik, iceland</Text>
        </View>
        <View style={styles.row}>
        <Icon name="globe" size={16} color="#23272A" />
          <Text style={{color:"#777777", marginLeft: 17}}>islenska, enska, danska, spaenska</Text>
        </View>
        <View style={styles.row}>
        <Icon name="age" size={19} color="#23272A" />
          <Text style={{color:"#777777", marginLeft: 20}}>20 ara</Text>
        </View>
        <View style={styles.row}>
        <Icon name="phone" size={14} color="#23272A" />
          <Text style={{color:"#777777", marginLeft: 20}}>5812345</Text>
        </View>
        <View style={styles.row}>
        <Icon name="envelope" size={11} color="#23272A" />
          <Text style={{color:"#777777", marginLeft: 20}}>email@email.email</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#23272A',
          borderRightWidth: 1
        }]}>
            <Title>32</Title>
            <Caption>likes</Caption>
        </View>
        <View style={styles.infoBox}>
            <Title>52</Title>
            <Caption>ferdir</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={()=>{global.stackNav.navigate('EditProfile')}}>
          <View style={StyleSheet.menuItem}>
            <Icon name="edit" size={25} color="#900" />
            <Text style={styles.menuItemText}>breytta profil</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{global.stackNav.navigate('FavoriteScreen')}}>
          <View style={StyleSheet.menuItem}>
            <Icon name="heart-o" size={25} color="#900" />
            <Text style={styles.menuItemText}>þinir uppahalds</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{global.stackNav.navigate('PaymentScreen')}}>
          <View style={StyleSheet.menuItem}>
            <Icon name="money" size={25} color="#900" />
            <Text style={styles.menuItemText}>Greiðslu aðferð</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{global.stackNav.navigate('helpScreen')}}>
          <View style={StyleSheet.menuItem}>
            <Icon name="question" size={25} color="#900" />
            <Text style={styles.menuItemText}>Hjálp</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
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
    borderBottomColor: '#23272A',
    borderBottomWidth: 1,
    borderTopColor: '#23272A',
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

