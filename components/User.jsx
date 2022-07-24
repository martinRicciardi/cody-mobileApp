import React from "react";
import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Hero from "./Hero";

const User = () =>{
    return(
        <>
        <Hero/>
        <Text>
            pibe estas logeado 👍
        </Text>
        </>
    )
}
export default User