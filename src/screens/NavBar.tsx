import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const NavBar = () => (
        <View
            style={styles.textHeader}>
                <Text style={styles.textHeader}>Items</Text>
        </View>

);

const styles = StyleSheet.create({
    textHeader: {
        
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        fontFamily:  'Helvetica',
        color: 'black',
        fontSize: 60,
        bottom: 150,
   
    },
  })

export default NavBar; 
