import * as React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { FAB } from 'react-native-paper';



const MyComponent = () => (
  <SafeAreaView >
  <View style={styles.header}>
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
    right: 1,
    bottom: 1,
  },
})

export default MyComponent;