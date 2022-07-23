import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import storeBanner from '../assets/banner-store.jpg'
import codyBreakFast from '../assets/cody-breakfast.jpg'
import codyLunch from '../assets/cody-lunch.jpg'
import codySnack from '../assets/cody-snack.jpg'
import productActions from "../redux/actions/productActions";

const Store = () => {

    const { height, width } = useWindowDimensions();
    const storeStyles = StyleSheet.create({
        storeBanner: {
            height: height / 4,
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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productActions.getProducts())
    }, [])

    const products = useSelector(store => store.productReducer.products)
    // console.log(products)

    return (
        <View style={{ height: height }}>
            <ImageBackground style={storeStyles.storeBanner} source={storeBanner} resizeMethod='auto' resizeMode="cover" >
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d3', padding: 5 }} >¿Qué menú vas a pedir?</Text>
                <View style={{ backgroundColor: '#000', padding: 5 }}><Text style={{ color: '#fff' }}>Acá iría el filtro de nombre</Text></View>
            </ImageBackground>

            <ScrollView style={storeStyles.menuContainer} contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>

                <TouchableOpacity underlayColor="#000" activeOpacity={0.6} >
                    <ImageBackground source={codyBreakFast} style={storeStyles.menu}>
                        <View style={storeStyles.menuText}>
                            <Text style={{ textAlign: 'center', fontSize: 40 }} >Desayuno</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity underlayColor="#000" activeOpacity={0.6} >
                    <ImageBackground source={codyLunch} style={storeStyles.menu}>
                        <View style={storeStyles.menuText}>
                            <Text style={{ textAlign: 'center', fontSize: 40 }} >Almuerzo</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity underlayColor="#000" activeOpacity={0.6} >
                    <ImageBackground source={codySnack} style={storeStyles.menu}>
                        <View style={storeStyles.menuText}>
                            <Text style={{ textAlign: 'center', fontSize: 40 }} >Merienda</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>


            </ScrollView>
        </View >

    )
}

export default Store;