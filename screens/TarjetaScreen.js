import React from 'react'
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, useWindowDimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CreditCardInput } from 'react-native-credit-card-input'
import { saveTarjetas, getTarjetas } from '../components/TarjetaAsyncStorage'
import { useNavigation } from "@react-navigation/native";
export default function TarjetaScreen() {
const navigation = useNavigation();
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: {},
  //     bolTarjeta: false,
  //     tarjetas: [],
  //   }
  // }
  const { height, width } = useWindowDimensions();
  const [data, setData] = useState({});
  const [bolTarjeta, setBolTarjeta] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);

  const onChange = (formData) => {

    // console.log(JSON.stringify(formData, null, " "));
    setData(formData.values);
    setBolTarjeta(formData.valid);

    // this.setState({
    //   data: formData.values,
    //   bolTarjeta: formData.valid
    // })
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{  alignItems: 'center', justifyContent:'space-evenly', height: height, width: width, padding:20, backgroundColor:'#fae1d0' }}>
        
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
          marginBottom:40
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("Finally")}>
            <Text style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'white',
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