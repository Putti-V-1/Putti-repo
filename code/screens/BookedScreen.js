import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export function BookedScreen() {
  return (
    <View style={styles.container}>
      <Text style={{
        paddingLeft: 132,
        fontSize: 20,
        marginBottom: 10,
        padding: 10,
      }}>Bókaðar ferðir.</Text>
    </View>
  );
}

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
