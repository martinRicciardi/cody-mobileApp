import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import Banner from '../assets/banner-store.jpg'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import cody from '../assets/cody2.png'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const User = () => {
    const user = useSelector(store => store.userReducer.user)
    const dispatch = useDispatch()
    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
    });
    const { height, width } = useWindowDimensions();
    const userStyles = StyleSheet.create({
        authBanner: {
            height: height / 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        photo: {
            width: 100,
            height: 100,
            // backgroundColor: "#f9b384d7",
            borderRadius: 100
        },
        container: {
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#fae1d0',
            borderRadius: 15,
            height: '100%'
        },
        user: {
            justifyContent: 'space-between',
            alignItems: "center",
            backgroundColor: '#fae1d0',
            borderRadius: 10,
            padding: 5,
            height: '60%'
        },
        options: {
            justifyContent: 'flex-end',
            alignItems: "center",
            height: '40%'
        }

    });

    return (
        <View style={{ height: height, justifyContent: 'flex-start' }} >
            <ImageBackground style={userStyles.authBanner} source={Banner} resizeMethod='auto' resizeMode="cover" >
                <View style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} ></View>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, textAlign: 'center', width: '50%', fontFamily: 'Thunder-Love', color: '#581C0C' }} >Perfil</Text>
                <Image source={cody} style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} resizeMethod='auto' resizeMode='cover' />
            </ImageBackground>
            <View style={{ flexGrow: 1, backgroundColor: "#f9b384d7", padding: 15, marginBottom: 180 }}>
                <View style={userStyles.container}>
                    <View style={userStyles.user}>
                        {user.image &&
                            <Image style={userStyles.photo} resizeMethod='auto' resizeMode='contain' source={{ uri: user.image }} />
                        }
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 25, fontFamily: 'Thunder-Love', color: '#581C0C' }}>Bienvenid@</Text>
                            <Text style={{ fontSize: 25, fontFamily: 'Thunder-Love', color: '#581C0C' }}>
                                {user.firstName + " " + user.lastName}
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, borderBottomWidth: 1, fontFamily: 'Thunder-Love', color: '#581C0C' }}>Datos personales:</Text>
                            <Text style={{ fontSize: 15, marginTop: 15, fontFamily: 'Thunder-Love', color: '#581C0C' }}>
                                Email: <Text style={{fontFamily: 'Mochy'}}>{user.email}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={userStyles.options}>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#f9b384d7", height: 40, width: '60%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginVertical: 5 }}>
                            <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: 'Thunder-Love', color: '#581C0C' }}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={async () => await dispatch(userActions.signOutUser())} underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#fc793f", height: 40, width: '60%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginVertical: 5 }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Thunder-Love', color: '#581C0C' }}>Cerrar sesion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} style={{ justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                            <Text style={{ fontSize: 15, color: "#fc0505" }}>Eliminar cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default User