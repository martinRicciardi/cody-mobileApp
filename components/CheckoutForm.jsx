import { Form, FormItem, Picker } from 'react-native-form-component';
import { KeyboardAvoidingView, StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Banner from '../assets/banner-store.jpg'
import cody from '../assets/cody2.png'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const SignUp = () => {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('')
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    let [fontsLoaded] = useFonts({
        'Thunder-Love': require('../assets/fonts/ALoveofThunder.ttf'),
        'Mochy': require('../assets/fonts/MochiyPopOne-Regular.ttf'),
    });

    const styles = StyleSheet.create({
        // fonts: {
        //     title: { fontSize: 50 },
        //     slogan: { fontSize: 30, fontFamily: 'Charm_400Regular' },
        //     normal: { fontSize: 15, fontFamily: 'Comfortaa_500Medium' }
        // },
        text: {
            primary: { color: "#f9b384d7" },
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
        authBanner: {
            height: height / 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            width: width
        },
        authContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            padding: 15,
            paddingBottom: 45,
            backgroundColor: '#f9b384d7',
        },
        formContainer: {
            borderWidth: 1,
            padding: 25,
            backgroundColor: '#fae1d0',
            borderRadius: 12,
            justifyContent: 'space-evenly'
        }
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <ImageBackground style={styles.authBanner} source={Banner} resizeMethod='auto' resizeMode="cover" >
                    <View style={{
                        // flexGrow:1,
                        width: '30%',
                        height: '100%'
                    }} ></View>
                    <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, fontFamily: 'Thunder-Love', color: '#581C0C' }} >Datos de Envio</Text>
                    <Image source={cody} style={{
                        // flexGrow:1,
                        width: '30%',
                        height: '100%'
                    }} resizeMethod='auto' resizeMode='cover' />
                </ImageBackground>

                <ImageBackground style={styles.authContainer} resizeMethod='auto' resizeMode="cover" >
                    <Form
                        onButtonPress={() => navigation.navigate("Card", { address: address, phone: phone })}
                        buttonText='PAGAR'
                        buttonStyle={{ backgroundColor: '#f8914c' }}
                        style={styles.formContainer}
                        buttonTextStyle={{fontFamily: 'Thunder-Love', color: '#581C0C'}}
                    >
                        <Text style={[styles.text.primary, { textAlign: 'center', marginBottom: 10, fontSize: 30, fontSize: 17, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, fontFamily: 'Thunder-Love', color: '#581C0C'}]}>¿Donde te enviamos el pedido?</Text>

                        <FormItem
                            label="Dirección de Entrega"
                            isRequired
                            value={address}
                            onChangeText={(address) => setAddress(address)}
                            asterik
                            showErrorIcon
                            textContentType='streetAddressLine1'
                            keyboardType='default'
                            textInputStyle={{ color: '#000' }}
                        />
                        <FormItem
                            label="Déjanos un teléfono"
                            isRequired
                            value={phone}
                            onChangeText={(phone) => setPhone(phone)}
                            asterik
                            showErrorIcon
                            textContentType='telephoneNumber'
                            keyboardType='phone-pad'
                            textInputStyle={{ color: '#000' }}
                        />
                    </Form>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default SignUp;