import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import heroBg from '../assets/banner-hero3.jpg'
import SignIn from "../components/SignIn";
import { useSelector } from "react-redux";

const Profile = () => {

    const navigation = useNavigation();

    const { height, width } = useWindowDimensions()

    const heroStyles = StyleSheet.create({
        text: {
        primary: { color: "#00695c" },
        light: { color: "#f7f3f3" },
        center: { textAlign: 'center' },
        shadowLight: {
            textShadowColor: '#fff',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 1
        },
        shadowPrimary: {
            textShadowColor: '#00695c',
            textShadowOffset: { width: 3, height: 1 },
            textShadowRadius: 1
        },
        shadowBlurLight: {
            textShadowColor: '#fff',
            textShadowOffset: { width: 3, height: 0 },
            textShadowRadius: 3
        },
        shadowBlurPrimary: {
            textShadowColor: '#00695c',
            textShadowOffset: { width: 3, height: 0 },
            textShadowRadius: 3
        }
        },
        heroContainer: {
            height: height / 4 * 3,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        textContainer: {
            height: "50%",
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 60
        },
        navigateButtons: {
            height: "25%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center"
        }
    });

    const user = useSelector(store => store.userReducer.user)

    return(
        <ScrollView>
        <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='auto' resizeMode="cover" >
            <View style={heroStyles.textContainer} >
                <Text variant='h1' style={{ marginVertical: 20, fontSize: 40 }} >CODY</Text>
                <Text variant='h3' style={{ fontSize: 20 }} >Coffe & Code</Text>
            </View>
        </ImageBackground >
                <SignIn/>
                <View style={heroStyles.navigateButtons}>
                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Profile")}>
                        <View style={{ height: "50%", flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
                        <Text style={{ borderWidth: 2, backgroundColor: "#ccc", padding: 10 }} >
                            Inicia sesión
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("SignUp")}>
                        <View style={{ height: "50%", flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
                        <Text style={{ borderWidth: 2, backgroundColor: "#ccc", padding: 10 }} >
                            Registrate
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    )
}



export default Profile