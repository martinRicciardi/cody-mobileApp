import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import heroBg from '../assets/banner-hero3.jpg'

const Hero = () => {

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

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
    }
  });

  return (
    <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='auto' resizeMode="cover" >
      <View style={heroStyles.textContainer} >
        <Text variant='h1' style={{ marginVertical: 20, fontSize: 40 }} >CODY</Text>
        <Text variant='h3' style={{ fontSize: 20 }} >Coffe & Code</Text>
      </View>
      <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Store")}>
        <View style={{ height: "50%", flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
          <Text style={{ borderWidth: 2, backgroundColor: "#ccc", padding: 10 }} >
            Entra y comprá
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground >
  )
}

export default Hero