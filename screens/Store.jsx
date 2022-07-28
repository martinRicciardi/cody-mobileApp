import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import storeBanner from '../assets/banner-store.jpg'
import codyBreakFast from '../assets/cody-breakfast.png'
import codyLunch from '../assets/cody-lunch.png'
import codySnack from '../assets/cody-snack.png'
import codyProduct from '../assets/cody-product.png'
import productActions from "../redux/actions/productActions";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Store = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const storeStyles = StyleSheet.create({
        storeBanner: {
            height: height / 5,
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        menuContainer: {
            backgroundColor: '#f9b384d7',
            width: width,
            marginBottom: 40
        },
        menu: {
            height: 300,
            width: 250,

            marginTop: 20

        },
        menuText: {
            justifyContent: 'flex-start',
            height: 55,
            width: 250,
            borderRadius: 20,
            backgroundColor: 'rgba(0,0,0,0.15)',
        }
    });

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getProducts())
    }, [])
    const products = useSelector(store => store.productReducer.products)
    // console.log(products)
    const categories = [{ name: 'Desayuno', image: codyBreakFast }, { name: 'Almuerzo', image: codyLunch }, { name: 'Postre', image: codySnack }, { name: 'Producto', image: codyProduct }]

    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={{ height: height, }}>
            <ImageBackground style={storeStyles.storeBanner} source={storeBanner} resizeMethod='auto' resizeMode="cover" >
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, fontFamily: 'Mochy', color: '#581C0C' }} >¿Qué menú vas a pedir?</Text>
            </ImageBackground>

            <ScrollView style={storeStyles.menuContainer} contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {categories.map((item, i) => {
                    return (
                        <TouchableOpacity key={i} underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Menu", { category: item.name })}>
                            <ImageBackground source={item.image} style={storeStyles.menu}>
                                <View style={storeStyles.menuText}>
                                    <Text style={{ textAlign: 'center', fontSize: 40, fontFamily: 'Thunder-Love', color: '#581C0C' }} >{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View >

    )
}

export default Store;