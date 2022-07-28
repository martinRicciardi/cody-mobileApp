import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAvoidingView, StyleSheet, TextInput, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import menubg from '../assets/banner-hero3.jpg'
import productbg from '../assets/card-cont.jpg'
import productActions from "../redux/actions/productActions";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Menu = ({ route }) => {
    const { height, width } = useWindowDimensions();

    const menuStyles = StyleSheet.create({
        menuBanner: {
            // height: height / 8,
            justifyContent: 'space-around',
            alignItems: 'center',
            width: width,
            borderBottomWidth: 1,
            padding: 10
        },
        filterContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
        },
        input: {
            borderWidth: 1,
            backgroundColor: "white",
            width: '60%',
            height: 40,
            padding: 10,
            borderRadius: 10
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
    const [search, setSearch] = useState('');
    const [reload, setReload] = useState(false);
    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
    });

    const dispatch = useDispatch()

    useEffect(() => {
        if (search !== '') {
            dispatch(productActions.filterProduct(search, route.params.category ));
        }else{
            dispatch(productActions.getProductsbyCategory(route.params.category))
        }
        // eslint-disable-next-line
    }, [search]);

    const products = useSelector(store => store.productReducer.filter)
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={{ flex: 1 }}
        >
            <ImageBackground style={menuStyles.menuContainer} source={menubg} resizeMethod='auto' resizeMode="cover" >
                <View style={menuStyles.menuBanner}>
                    {/* <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d3', padding: 5 }} >Elija sus productos</Text> */}
                    <View style={menuStyles.filterContainer}>
                        <TextInput
                            style={menuStyles.input}
                            onChangeText={setSearch}
                            placeholder="ej: 'Brownie'"
                            keyboardType="default"
                        />
                    </View>
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
                                        <Text variant='h3' style={{ fontSize: 18, backgroundColor: '#f9b384d3', paddingHorizontal: 5, paddingVertical: 7, borderRadius: 10, fontWeight: '800', textAlign: 'center',fontFamily: 'Thunder-Love', color: '#581C0C', width:160 }} >{item.name}</Text>
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
        </KeyboardAvoidingView>
    )
}

export default Menu;