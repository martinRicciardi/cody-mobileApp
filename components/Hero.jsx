import { StyleSheet, useWindowDimensions, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import heroBg from '../assets/banner-hero3.jpg'

const Hero = () => {

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
      height: height / 4 * 3,
      // padding: 30
    },
    textContainer: {
      height: "50%",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 60,
      marginTop: 50
    },
    btn: {
      borderRadius: 15,
      height: 60,
      backgroundColor: 'rgba(249, 179, 132, 0.9)',
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    }
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='auto' resizeMode="cover" >
      <View style={{backgroundColor:'rgba(255,255,255,0.4)', width:'100%', height:'100%',padding: 30,justifyContent: 'space-evenly',
      alignItems: 'center'}}>
        <View style={heroStyles.textContainer} >
          <Text variant='h1' style={{ marginVertical: 10, fontSize: 50, fontFamily: 'Thunder-Love', color: '#581C0C' }} ><Text style={{color:'#f89a2d'}}>CO</Text><Text style={{color:'#554d39'}}>DY</Text></Text>
          <Text variant='h3' style={{ marginLeft: 100, fontSize: 25, fontFamily: 'Thunder-Love', color: '#f0d272', width: '100%' }} ><Text style={{color:'#554d39'}}>Coffe</Text> & <Text style={{color:'#f89a2d'}}>Code</Text></Text>
        </View>
        <View style={{ height: "50%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
          <TouchableOpacity style={heroStyles.btn} underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Main")}>
            <Text style={{ fontFamily: 'Thunder-Love', color: '#581C0C' }}>
              Ingresar a la Tienda
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground >
  )
}

export default Hero