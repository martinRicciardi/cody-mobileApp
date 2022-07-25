import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Banner from '../assets/banner-store.jpg'
import { useSelector } from "react-redux";
import { AsyncStorage } from 'react-native';

const User = () =>{
    const userImage = useSelector(store => store.userReducer.user.image)
    const userFName = useSelector(store => store.userReducer.user.firstName)
    const userLName = useSelector(store => store.userReducer.user.lastName)
    const navigation = useNavigation();

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
            backgroundColor: "#f9b384d7",
            borderRadius: 100
        },
        container: {
            width: "100%",
            height: 635,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        user: {
            display: "flex",
            flexDirection: "row",
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
                        <ImageBackground style={userStyles.photo} source={userImage}/>
                        <Text style={{ fontSize: 40 }}>
                            {userFName + " " + userLName}
                        </Text>
                    </View>
                    <View style={{ justifyContent: "center", alignSelf: "center" }}>
                        <TouchableOpacity onPress={ () => {AsyncStorage.removeItem('@token') && navigation.navigate("Home")}} underlayColor="#000" activeOpacity={0.6} style={{ backgroundColor: "#f9b384d7", height: 50, width: 130, justifyContent: "center", alignItems: "center", borderRadius: 15}}>
                            <Text style={{fontSize: 20}}>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
        </>
    )
}
export default User