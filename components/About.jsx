import React from 'react'

import { StyleSheet, useWindowDimensions, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const About = () => {

  const navigation = useNavigation();
  const codyimg = '../assets/cody3.png'
  const { height, width } = useWindowDimensions();

  const aboutStyles = StyleSheet.create({
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
    aboutContainer: {
      height: height / 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fae1d0'
    },
    textContainer: {
      height: "100%",
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5
    }
  });

  return (
    <View style={aboutStyles.aboutContainer} resizeMethod='auto' resizeMode="cover" >
      <View style={aboutStyles.textContainer} >
        <Text variant='h3' style={{ fontSize: 15 }} >Lorem ipsum, dolor sit amet consectetur adipisaut, deserunt quae vel. dolor sit ametdolor sit ametdolor sit amet Veritatis nemo consectetur.</Text>
      </View>
      <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center', width: '40%', padding:5 }}>
        <Image source={{ uri: 'https://i.imgur.com/UPyIndi.png' }} style={{
          width: '100%',
          height: '100%'
        }} resizeMethod='auto' resizeMode='contain' />
      </View>

    </View >
  )
}


export default About