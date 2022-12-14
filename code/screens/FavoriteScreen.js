import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        paddingLeft: 65,
        fontSize: 20,
        marginBottom: 10,
        padding: 10,
      }}>Her bua uppahalds folkið þitt.</Text>
      <View style={styles.row}>
          <Text style={{color:"#05375a", marginLeft: 10, fontSize: 40}}>
            <Icon name="user-o" size={20} color="#05375a" />
            @kanye
            <Icon name="heart" size={20} color="#FF0000"/>
            </Text>
        </View>
        <View style={styles.row}>
          <Text style={{color:"#05375a", marginLeft: 10, fontSize: 40}}>
            <Icon name="user-o" size={20} color="#05375a" />
            @obama
            <Icon name="heart" size={20} color="#FF0000"/>
            </Text>
        </View>
    </View>
  );
}
export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
});
