import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LiteCreditCardInput } from 'react-native-credit-card-input'
import { saveTarjetas, getTarjetas } from '../components/TarjetaAsyncStorage'

export default class LiteTarjetaScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {},
      bolTarjeta: false,
      tarjetas : [],
    }
  }

  onChange = (formData) => {

    console.log(JSON.stringify(formData, null, " "))
    this.setState({data: formData.values,
    bolTarjeta: formData.valid})
  }

  onFocus = (field) => console.log("focus", field)

  asociarTarjeta = () => {

    if(this.state.bolTarjeta){

      const result = [
        ...this.state.tarjetas,
        this.state.data
      ]
  
      this.setState({tarjetas: result}, () => {
        saveTarjetas(result).then((res) => {
          console.log('Tarjeta Asociada');
        })
      })
    }else{
      console.log("Debe Llenar todos los campos")
    }
  }

  componentDidMount(){
    
    getTarjetas().then((res) => {
      if(res != null){
        this.setState({tarjetas: res})
      }
      console.log(res)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{ width: '100%', height: '30%', marginTop: 60 }}>
        <LiteCreditCardInput
              autoFocus
              requiresCVC
              cardScale={0.9}
              allowScroll={true}
              labelStyle={styles.label}
              inputStyle={styles.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}
              placeholders={{ number: "1234 5678 1234 5678", expiry: "MM/YY", cvc: "CVC" }}
              labels={{ number: "NÚMERO TARJETA", expiry: "EXPIRA", cvc: "CVC/CCV" }}
              onFocus={this.onFocus}
              onChange={this.onChange} />
        </View>
        <View style={{
          width: 280,
          marginTop: 40,
          marginBottom: 20,
          backgroundColor: '#388E3C',
          borderRadius: 60
        }}>
          <TouchableOpacity onPress={()=> this.asociarTarjeta()}>
            <Text style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'white',
              paddingVertical: 15,
            }}>Asociar Tarjeta</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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