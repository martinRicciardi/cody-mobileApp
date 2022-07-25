import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux'
import productActions from "../redux/actions/productActions";

import storeBanner from '../assets/banner-store.jpg'



export default function ShoppingCart() {

    const dispatch = useDispatch();
    const { height, width } = useWindowDimensions();
    const cartStyles = StyleSheet.create({
        storeBanner: {
            height: height / 5,
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        table: {
            width: width,
            height: height,
            backgroundColor: '#fae1d0',
            borderRadius: 10,
        },
        tableHead: {
            height: 50,
            width: width,
            borderWidth: 3,
            backgroundColor: '#f9b384d7',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        headItem: {
            height: '100%',
            borderEndWidth: 2,
            width: width / 6,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },
        headItemEmpty: {
            height: '100%',
            width: width / 6,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },
        tableRow: {
            height: 100,
            width: '100%',
            borderBottomWidth: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        rowItem: {
            height: '100%',
            width: width / 6,
            borderEndWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5
        },


    });
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fae1d0',
            width:width,
            height: height
        }
    });

    const cart = useSelector(store => store.productReducer.cart);

    return (

        <View style={{ height: height }} >
            <ImageBackground style={cartStyles.storeBanner} source={storeBanner} resizeMethod='auto' resizeMode="cover" >
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10 }} >Carrito de Compras</Text>
            </ImageBackground>
            <ScrollView contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <View style={styles.container}>
                    {cart.length > 0 ?
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Producto</DataTable.Title>
                                <DataTable.Title>Cantidad</DataTable.Title>
                                <DataTable.Title>Precio</DataTable.Title>
                                <DataTable.Title>Opcion</DataTable.Title>
                                <DataTable.Title>Opcion</DataTable.Title>
                            </DataTable.Header>

                            {cart.map((item, i) => (
                                <DataTable.Row key={i} style={{alignItems:'center'}}>
                                    <DataTable.Cell textStyle={{fontSize: 12}} >{item.name}</DataTable.Cell>
                                    <DataTable.Cell textStyle={{fontSize: 12}}  numeric>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell textStyle={{fontSize: 12}} numeric >${item.quantity * item.price}</DataTable.Cell>
                                    <DataTable.Cell textStyle={{fontSize: 10}} numeric onPress={async()=>{
                                    await dispatch(productActions.delFromCart(item._id));
                                }}
                                style={{backgroundColor:'#ccc'}}>Eliminar uno</DataTable.Cell>
                                    <DataTable.Cell textStyle={{fontSize: 10}} numeric onPress={async()=>{
                                    await dispatch(productActions.delFromCart(item._id, all=true));
                                }} style={{backgroundColor:'#ccc'}}>Eliminar todos</DataTable.Cell>
                                </DataTable.Row>
                            )) }  
                        </DataTable>
                        :
                        null
                    }
                </View>
            </ScrollView >
        </View >
    );
}

