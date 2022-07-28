import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux'
import productActions from "../redux/actions/productActions";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import storeBanner from '../assets/banner-store.jpg'
import cody from '../assets/cody6.png'

export default function ShoppingCart() {

    const dispatch = useDispatch();
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
    });
    const cartStyles = StyleSheet.create({
        storeBanner: {
            height: height / 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        tableContainer: {
            width: width,
            flexGrow: 2,
            padding: 20,
            height: height - 300
        },
        table: {
            width: '100%',
            minHeight: height / 2,
            backgroundColor: '#fae1d0',
            borderRadius: 10,
            padding: 15

        },
        tableContent: {
            justifyContent: 'space-between'
        },
        tableRow: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',

        },
        rowName: {
            height: '100%',
            width: '35%',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        rowItem: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 40
        },
        btn: {
            borderRadius: 15,
            height: 60,
            backgroundColor: '#fae1d0',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
        }
    });

    const cart = useSelector(store => store.productReducer.cart);

    let total = 0;

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (

        <View style={{ height: height, justifyContent: 'space-between', backgroundColor: '#f9b384d7' }} >
            <ImageBackground style={cartStyles.storeBanner} source={storeBanner} resizeMethod='auto' resizeMode="cover" >
                <View style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} ></View>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, fontFamily: 'Thunder-Love', color: '#581C0C' }} >Tu Pedido</Text>
                <Image source={cody} style={{
                    width: '30%',
                    height: '100%'
                }} resizeMethod='auto' resizeMode='contain' />
            </ImageBackground>
            <View style={cartStyles.tableContainer}>
                {/* <ScrollView > */}
                <View style={cartStyles.table}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {cart.length > 0 ?
                            <View style={{ justifyContent: 'space-between', height: '100%', width: '100%' }}>
                                <ScrollView  >
                                    {cart?.map((item, i) => {
                                        total += item.price * item.quantity;
                                        return (
                                            <View key={i} style={cartStyles.tableRow}>
                                                <View style={cartStyles.rowName} >
                                                    <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Thunder-Love', color: '#581C0C' }}>{item.name}</Text>
                                                </View>
                                                <View style={cartStyles.rowItem}>
                                                    <Text style={{ fontFamily: 'Thunder-Love', color: '#581C0C'}}>x {item.quantity}</Text>
                                                </View>
                                                <View style={[cartStyles.rowItem, { flexGrow: 1 }]}>
                                                    <Text style={{ fontFamily: 'Thunder-Love', color: '#581C0C'}}>${item.price * item.quantity}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, maxWidth: 55 }}>
                                                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6} style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '50%' }} onPress={async () => {
                                                        await dispatch(productActions.delFromCart(item._id));
                                                    }}>
                                                        <Ionicons name="remove-circle" size={24} color="black" />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6}
                                                        style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '50%' }}
                                                        onPress={async () => {
                                                            await dispatch(productActions.delFromCart(item._id, true))
                                                        }} >
                                                        <Entypo name="cross" size={24} color="black" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }
                                    )
                                    }
                                </ScrollView>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingHorinzontal: 30, borderTopWidth: 1, paddingTop: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: '500',fontFamily: 'Thunder-Love', color: '#581C0C' }}>Total: </Text>
                                    <Text style={{ fontSize: 20, fontWeight: '100',fontFamily: 'Thunder-Love', color: '#554d39' }}>${total}</Text>
                                </View>

                            </View>
                            :
                            < View style={{ justifyContent: 'center', alignSelf: 'center' }} >
                                <Text>Añade productos a tu pedido!</Text>
                            </View>
                        }
                    </View>
                </View>
                {/* </ScrollView > */}
            </View>
            {cart.length > 0 &&
                <View style={{ marginBottom: 50, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6}
                        style={cartStyles.btn}
                        onPress={async () => {
                            await dispatch(productActions.clearCart());
                        }}>
                        <Text style={{fontFamily: 'Thunder-Love', color: '#581C0C'}} >BORRAR TODO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6}
                        style={[cartStyles.btn]} onPress={() => navigation.navigate("Checkout", { item: total })}>
                        <Text style={{fontFamily: 'Thunder-Love', color: '#581C0C'}} >CONFIRMAR PEDIDO</Text>
                    </TouchableOpacity>

                </View>
            }

        </View >
    );
}

