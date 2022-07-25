import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import productActions from '../redux/actions/productActions';

export default function ShoppingCart() {

    const dispatch = useDispatch();

    const cart = useSelector(store => store.productReducer.cart);
    cart.length>0 && console.log(cart)

    return (
        <View>
            <Text>Bienvenido al carrito de compras</Text>
            {cart.length>0 && cart.map((item, i)=> <View><Text>{item.name}</Text><Text>{item.quantity}</Text></View>)}
            
            </View>
    );
}