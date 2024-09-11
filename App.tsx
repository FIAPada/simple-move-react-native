import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App;
