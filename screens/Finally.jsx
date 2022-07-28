import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import heroBg from '../assets/banner-hero4.jpg'

const Finally = () => {

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
            height: height,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        textContainer: {
            height: "50%",
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 60
        },
        btn: {
            borderRadius: 15,
            height: 60,
            backgroundColor: '#f9b384d7',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
        }
    });

    return (
        <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='scale' resizeMode="cover" >
            <View style={heroStyles.textContainer} >
                <Text variant='h1' style={{ marginVertical: 20, fontSize: 40 }} >CODY</Text>
                <Text variant='h3' style={{ fontSize: 20 }} >Coffe & Code</Text>
            </View>
            <View style={{ height: "50%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
                <Text>
                    Pedido enviado!
                </Text>
                <Text>
                    En cuanto el pedido esté en camino, te lo estaremos comunicando!
                </Text>
            </View>
        </ImageBackground >
    )
}

export default Finally