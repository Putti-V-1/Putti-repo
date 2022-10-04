import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import EditProfileScreen from './EditProfile';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'headerTitle Profile',
    };
  };

  state = {
    color1: 'pink',
    color2: 'yellow',
    color3: 'green',
    name: 'App.js state name text blabla',
    bio: 'App.js state bio text blabla.',
  };

  handlePress = () => {
    this.setState({ color3: 'purple' });
    this.props.navigation.navigate('Edit', {
      name: this.state.name,
      bio: this.state.bio,
      saveEditedProfile: this.saveEditedProfile,
    });
  };

  saveEditedProfile = (name, bio) => {
    this.setState({
      name: name,
      bio: bio,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 30,
          justifyContent: 'center',
        }}>
        <Image style={styles.picture} source={require('')} />

        <Text style={styles.name}>{this.state.name}</Text>

        <Text style={styles.bio}>{this.state.bio}</Text>

        <TouchableOpacity onPress={this.handlePress}>
          <View
            style={{
              backgroundColor: this.state.color1,
              color: this.state.color3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              borderWidth: 15,
              borderColor: this.state.color2,
              margin: 20,
            }}>
            <Text style={styles.buttonText}>
              TouchableOpacity View Text Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    height: 128,
    width: 128,
    borderRadius: 30,
    borderWidth: 1,
  },
  name: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 15,
    borderColor: 'red',
    backgroundColor: 'orange',
    color: 'green',
  },
  bio: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 15,
    borderColor: 'red',
    backgroundColor: 'orange',
    margin: 20,
  },
  buttonText: {
    fontSize: 30,
    paddingLeft: 5,
    paddingRight: 5,
    padding: 30,
    textAlign: 'center',
  },
});
               
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Edit: EditProfileScreen,
});

const App = createAppContainer(ProfileStack);
export default App;