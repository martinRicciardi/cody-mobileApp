import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Button, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import menubg from '../assets/banner-hero3.jpg'
import productbg from '../assets/card-cont.jpg'
import productActions from "../redux/actions/productActions";

const Menu = ({ route }) => {
    const { height, width } = useWindowDimensions();

    const menuStyles = StyleSheet.create({
        menuBanner: {
            height: height / 6,
            justifyContent: 'space-around',
            alignItems: 'center',
            width: width,
            borderBottomWidth: 2
        },
        menuContainer: {
            width: width,
            height: height,
            paddingBottom: 45
        },
        product: {
            height: 450,
            width: 250,
            marginTop: 20,
            alignItems: 'center'
        },
        productText: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 20,
            backgroundColor: 'rgba(0,0,0,0.15)'
        }
    });
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productActions.getProductsbyCategory(route.params.category))
    }, [])

    const products = useSelector(store => store.productReducer.filter)

    return (
        <ImageBackground style={menuStyles.menuContainer} source={menubg} resizeMethod='auto' resizeMode="cover" >
            <View style={menuStyles.menuBanner}>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d3', padding: 5 }} >Elija sus productos</Text>
                <View style={{ backgroundColor: '#000', padding: 5 }}><Text style={{ color: '#fff' }}>Acá iría el filtro de nombre</Text></View>
            </View>
            <ScrollView contentContainerStyle={{
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {products.length > 0 && products.map((item, i) => {
                    return (
                        <ImageBackground key={i} style={menuStyles.product} imageStyle={{ borderRadius: 20 }} source={productbg} resizeMethod='auto' resizeMode="cover" >
                            <Image source={{ uri: item.image }} style={{
                                width: '70%',
                                height: '65%'
                            }} resizeMethod='auto' resizeMode='contain' />
                            <View style={{ height: '35%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <View style={{ width: '60%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text variant='h3' style={{ fontSize: 18, backgroundColor: '#fff', color: '#f9b384d3', paddingHorizontal: 5, paddingVertical: 7, borderRadius: 10, fontWeight: '800', textAlign: 'center' }} >{item.name}</Text>
                                </View>
                                {item.stock > 0 ?
                                    <Text variant='h3' style={{ fontSize: 15, backgroundColor: '#f9b384d3', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, borderColor: '#fff', borderWidth: 1, fontWeight: '600' }} >${item.price}</Text>
                                    :
                                    <Text variant='h3' style={{ fontSize: 15, backgroundColor: 'red', paddingHorizontal: 15, color: '#fff', paddingVertical: 5, borderRadius: 10, borderColor: '#fff', borderWidth: 1 }} >AGOTADO</Text>

                                }
                                {item.stock > 0 &&
                                    <TouchableOpacity style={{ width: 200 }} key={i} underlayColor="#000" activeOpacity={0.6} onPress={async () => {
                                                await dispatch(productActions.addToCart(item._id));
                                            }} >
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 15, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 10, backgroundColor: "#318aac", borderColor: '#fff', borderWidth: 1, marginVertical: 10, color: '#fff', fontWeight: '600' }} >Pedir</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>
                        </ImageBackground>
                    )
                })}

            </ScrollView>
        </ImageBackground>
    )
}

export default Menu;