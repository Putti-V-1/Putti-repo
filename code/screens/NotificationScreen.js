import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        paddingLeft: 142,
        fontSize: 20,
        marginBottom: 10,
        padding: 10,
      }}>Tilkynningar.</Text>
    </View>
  );
}

export default NotificationScreen;

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