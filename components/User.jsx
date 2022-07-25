import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Banner from '../assets/banner-store.jpg'
import { useSelector } from "react-redux";
import { AsyncStorage } from 'react-native';
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const User = () =>{
    const user = useSelector(store => store.userReducer.user)
    const userFName = useSelector(store => store.userReducer.user.firstName)
    const userLName = useSelector(store => store.userReducer.user.lastName)
    const navigation = useNavigation();
    // console.log(user);

    const dispatch = useDispatch()
    


    const { height, width } = useWindowDimensions();
    const userStyles = StyleSheet.create({
        storeBanner: {
            height: height / 5,
            justifyContent: 'space-around',
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
            width: "100%",
            height: 631,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#fae1d0"
        },
        user: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        }
    });

    return(
        <>
            <ImageBackground style={userStyles.storeBanner} source={Banner} resizeMethod='auto' resizeMode="cover" >
                    <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10 }} >Mi Perfil</Text>
            </ImageBackground>
                <View style={userStyles.container}>
                    <View style={userStyles.user}>
                        <Image style={userStyles.photo} resizeMethod='auto' resizeMode='contain' source={{uri: user.image}}/>
                        <Text style={{ fontSize: 40, marginTop: 20 }}>
                            {userFName + " " + userLName}
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            {user.email}
                        </Text>
                    </View>
                    <View style={{ justifyContent: "center", alignSelf: "center", height: 300 }}>
                        <TouchableOpacity  underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#f9b384d7", height: 50, width: 130, justifyContent: "center", alignItems: "center", borderRadius: 15, margin: 20}}>
                            <Text style={{fontSize: 20}}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ async () => await dispatch(userActions.signOutUser())} underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#f9b384d7", height: 50, width: 130, justifyContent: "center", alignItems: "center", borderRadius: 15, margin: 20}}>
                            <Text style={{fontSize: 20}}>Cerrar sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#fc0505", height: 50, width: 130, justifyContent: "center", alignItems: "center", borderRadius: 15, margin: 20}}>
                            <Text style={{fontSize: 20}}>Eliminar cuenta</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
        </>
    )
}
export default User