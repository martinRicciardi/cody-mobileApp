import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Button, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

    const addToCart= async (e) => {
        console.log(e)
        // await dispatch(productActions.addToCart(id));
        // setReload(!reload);
    }

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
                {products && products.map((item, i) => {
                    return (
                        <ImageBackground key={i} style={menuStyles.product} imageStyle={{ borderRadius: 20 }} source={productbg} resizeMethod='auto' resizeMode="cover" >
                            <Image source={{ uri: item.image }} style={{
                                width: '70%',
                                height: '65%'
                            }} resizeMethod='auto' resizeMode='contain' />
                            <View style={{ height: '35%', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text variant='h3' style={{ fontSize: 18, backgroundColor: '#fff', color: '#f9b384d3', paddingHorizontal: 15, paddingVertical: 7, borderRadius: 10, fontWeight: '800', marginVertical: 5 }} >{item.name}</Text>
                                <Text variant='h3' style={{ fontSize: 15, backgroundColor: '#f9b384d3', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, borderColor: '#fff', borderWidth: 1, marginVertical: 3 }} >${item.price}</Text>
                                <Text variant='h3' style={{ fontSize: 15, backgroundColor: '#f9b384d3', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, borderColor: '#fff', borderWidth: 1, marginVertical: 3 }} >Stock: {item.stock}</Text>
                                <Button title='Pedir'style={{ fontSize: 15, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 10, borderColor: '#fff', borderWidth: 1, marginVertical: 10, color: '#fff', fontWeight: '600' }} color="#318aac"  onPress={async()=>{
                                    await dispatch(productActions.addToCart(item._id));
                                }} />
                            </View>
                        </ImageBackground>
                    )
                })}

            </ScrollView>
        </ImageBackground>
    )
}

export default Menu;