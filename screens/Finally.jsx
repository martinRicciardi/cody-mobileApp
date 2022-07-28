import { StyleSheet, useWindowDimensions, ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import cody from '../assets/cody-lunch.png'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import heroBg from '../assets/banner-hero4.jpg'
const Finally = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),

    });

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
            alignItems: 'center',
            padding: 30
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
        },
        menuText: {
            justifyContent: 'flex-start',
            // height: 55,
            width: 250,
            borderRadius: 20,
            backgroundColor: '#f9b384d7',
        }
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    setTimeout(function () {
        navigation.navigate("Home");
    }, 3000);

    return (
        <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='scale' resizeMode="cover" >
            <View style={heroStyles.menuText}>
                <Text style={{ textAlign: 'center', fontSize: 40, fontFamily: 'Thunder-Love', color: '#581C0C' }}>
                    Listo!
                </Text>
            </View>
            <Image source={cody} style={{
                width: '70%',
                height: '30%'
            }} resizeMethod='auto' resizeMode='cover' />
            <View style={heroStyles.menuText}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Thunder-Love', color: '#581C0C' }}>
                    ¡En cuanto el pedido esté en camino, te lo estaremos comunicando!
                </Text>
            </View>
        </ImageBackground >
    )
}

export default Finally