import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import heroBg from '../assets/banner-hero3.jpg'
import SignIn from "../components/SignIn";
import User from '../components/User'
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector(store => store.userReducer.user)
    return(
        <ScrollView>
        {user ? <User/> : <SignIn/>}
        </ScrollView>
    )
}



export default Profile