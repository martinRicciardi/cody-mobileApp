import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import menubg from '../assets/banner-hero3.jpg'
import productActions from "../redux/actions/productActions";

const Menu = () => {

    const { height, width } = useWindowDimensions();
    const menuStyles = StyleSheet.create({
        menuBanner: {
            height: height / 4,
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        menuContainer: {
            width: width,
            height: height,
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
    console.log(products)

    return (
        <ImageBackground style={menuStyles.menuContainer} source={menubg} resizeMethod='auto' resizeMode="cover" >
            <View style={menuStyles.menuBanner}>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d3', padding: 5 }} >Elija sus productos</Text>
                <View style={{ backgroundColor: '#000', padding: 5 }}><Text style={{ color: '#fff' }}>Acá iría el filtro de nombre</Text></View>
            </View>
            <ScrollView  contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {products && products.map((item, i)=> {
                    return(
                    <Text>{item.name}</Text>
                    )
                })}

            </ScrollView>
        </ImageBackground>
    )
}

export default Menu;