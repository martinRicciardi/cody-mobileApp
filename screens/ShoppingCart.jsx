import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Table from 'react-native-responsive-table-view'

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
        menuContainer: {
            backgroundColor: '#fae1d0',
            width: width,
            marginBottom: 40
        },
        menu: {
            height: 250,
            width: 250,
            marginTop: 20
        },
        menuText: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 20,
            backgroundColor: 'rgba(0,0,0,0.15)'
        }
    });
    const cart = useSelector(store => store.productReducer.cart);

    return (
        <View style={{ height: height }}>
            <ImageBackground style={cartStyles.storeBanner} source={storeBanner} resizeMethod='auto' resizeMode="cover" >
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10 }} >Carrito de Compras</Text>
            </ImageBackground>


            <ScrollView style={cartStyles.menuContainer} contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>

                <Table>
                    <Table.Row>
                        <Table.Cell><Text>text 1</Text></Table.Cell>
                        <Table.Cell><Text>text 2</Text></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Text>text 3</Text></Table.Cell>
                        <Table.Cell><Text>text 4</Text></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Text>text 5</Text></Table.Cell>
                        <Table.Cell><Text>text 6</Text></Table.Cell>
                    </Table.Row>
                </Table>
            </ScrollView>
        </View >
    );
}

