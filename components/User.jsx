import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import Banner from '../assets/banner-store.jpg'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import cody from '../assets/cody2.png'

const User = () => {
    const user = useSelector(store => store.userReducer.user)

    const dispatch = useDispatch()

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
            borderRadius:15,
            height:'100%'
        },
        user: {
            justifyContent: 'space-around',
            alignItems: "center",
            backgroundColor: '#fae1d0',
            borderRadius: 10,
            padding: 15,
            height: '50%',
            borderBottomWidth:2
        },
        options: {
            justifyContent: 'flex-end',
            alignItems: "center",
            // padding: 15,
            height: '50%'
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
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, textAlign: 'center', width: '50%' }} >Perfil</Text>
                <Image source={cody} style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} resizeMethod='auto' resizeMode='cover' />
            </ImageBackground>
            <View style={{flexGrow: 1, backgroundColor:"#f9b384d7", padding:15, marginBottom:180}}>
                <View style={userStyles.container}>
                    <View style={userStyles.user}>
                        {user.image &&
                            <Image style={userStyles.photo} resizeMethod='auto' resizeMode='contain' source={{ uri: user.image }} />
                        }
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 30 }}>Bienvenid@</Text>
                            <Text style={{ fontSize: 30 }}>
                                {user.firstName + " " + user.lastName}
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, borderBottomWidth: 1 }}>Datos personales:</Text>
                            <Text style={{ fontSize: 15, marginTop: 10 }}>
                                Email: {user.email}
                            </Text>
                        </View>
                    </View>
                    <View style={userStyles.options}>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#f9b384d7", height: 40, width: '60%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginVertical:5 }}>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={async () => await dispatch(userActions.signOutUser())} underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#fc793f", height: 40, width: '60%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginVertical:5 }}>
                            <Text style={{ fontSize: 15 }}>Cerrar sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#fc0505", height: 35, width: '60%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginVertical:5 }}>
                            <Text style={{ fontSize: 15 }}>Eliminar cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default User