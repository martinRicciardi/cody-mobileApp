import React from 'react'
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, useWindowDimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CreditCardInput } from 'react-native-credit-card-input'
import { saveTarjetas, getTarjetas } from '../components/TarjetaAsyncStorage'
import { useNavigation } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function TarjetaScreen() {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const [data, setData] = useState({});
  const [bolTarjeta, setBolTarjeta] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);
  let [fontsLoaded] = useFonts({
    'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
    'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
  });
  const onChange = (formData) => {
    setData(formData.values);
    setBolTarjeta(formData.valid);
  }

  const asociarTarjeta = () => {
    if (bolTarjeta) {
      const result = [
        ...tarjetas,
        data
      ]
      setTarjetas(result);
      saveTarjetas(result)
    } else {
      console.log("Todos los campos son requeridos")
    }
  }
  
  useEffect(() => {
    getTarjetas().then((res) => {
      if (res !== null) {
        setTarjetas(res)
        console.log(res)
      }
    });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'space-evenly', height: height, width: width, padding: 20, backgroundColor: '#fae1d0' }}>

        <View style={{ width: '100%', height: '50%' }}>
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            cardScale={1}
            allowScroll={true}
            labelStyle={styles.label}
            inputStyle={styles.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            placeholders={{ number: "1234 5678 1234 5678", name: "NOMBRE COMPLETO", expiry: "MM/YY", cvc: "CVV" }}
            labels={{ number: "NÚMERO DE TARJETA", expiry: "FECHA DE CADUCIDAD", name: "NOMBRE COMPLETO", cvc: "CVV" }}
            onChange={onChange}
          />
        </View>
        <View style={{
          width: 280,
          backgroundColor: '#f8914c',
          borderRadius: 15,
          marginBottom: 40
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("Finally")}>
            <Text style={{
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Thunder-Love',
              color: '#581C0C',
              paddingVertical: 15,
            }}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});