import * as React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { FAB } from 'react-native-paper';
import NavBar from './NavBar';



const MyComponent = () => (
  <SafeAreaView >
  <View style={styles.header}>
    <NavBar />
  <FAB
    style={styles.fab}
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
  </View>
  </SafeAreaView>
  );

const styles = StyleSheet.create({

  header: {

    backgroundColor: 'red',
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#C12121',
    margin: 40,
    right: -199,
    bottom: -400,
  },
})

export default MyComponent;