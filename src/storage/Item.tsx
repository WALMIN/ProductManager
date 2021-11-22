import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Item{
itemId: string
price: number
productType: string
}

let obj = {  
    itemId: '',
    price: null,
    productType: '' 
  }  
AsyncStorage.setItem('item',JSON.stringify(obj));  



export default Item