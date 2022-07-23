import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// import heroStyles from '../styles/hero-styles'
import heroBg from '../assets/banner-hero3.jpg'

const Hero = () => {

  const navigation = useNavigation();


  return (
    <ImageBackground  source={heroBg} resizeMethod='auto' resizeMode="cover" >
      <View >
        <Text variant='h1' >CODY</Text>
        <Text variant='h3' >Coffe & Code</Text>
      </View>
      {/* <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Store")}> */}
      <TouchableOpacity underlayColor="#000" activeOpacity={0.6} >
        <View >
          <Text >
            Conozca nuestros productos! (CAMBIAR ESTO!)
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground >
  )
}

export default Hero