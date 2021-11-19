import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CreateNewItem() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.label}>Create New Product</Text>
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Name'/>
        <TextInput style={styles.input} placeholder='Price'/>
        <TextInput style={styles.input} placeholder='Product Type'/>
        </View>
        <View style={styles.saveButtonContainer}>
            <Button title="Save" onPress={alert} />
        </View>
        <View style={styles.cancelButtonContainer}>
            <Button title="Cancel" onPress={alert} />
        </View>



      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label:{
        flex:1,
        fontSize: 30,
        marginTop: 50,
        justifyContent:'flex-start'
    },
    inputContainer:{
        justifyContent:'flex-start',
        marginStart: 1,
        
    },
    input:{
        justifyContent:'center',
        alignContent:'flex-start',
        marginBottom:20,
        margin: 5,
        width:340,
        height:60,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius:5,
    },
    saveButtonContainer:{
        marginBottom:10,
        alignSelf:'flex-end',
        width: 140,
        height:40,
    },
    cancelButtonContainer:{
        marginBottom:10,
        alignSelf:'flex-end',
        width: 140,
        height:40,
    },
    
   
  });
  