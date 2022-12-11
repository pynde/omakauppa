import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import NavBar from './components/NavBar';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <NavBar/>
      <View style={styles.center}> 
      <Text>JEEE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
});

export default App;