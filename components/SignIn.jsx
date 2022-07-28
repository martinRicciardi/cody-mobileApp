import { Form, FormItem } from 'react-native-form-component';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Banner from '../assets/banner-store.jpg'
import cody from '../assets/cody2.png'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    let message = useSelector(store => store.userReducer.message);
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
            height: height / 5,
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
            paddingBottom: 50,
            backgroundColor: '#f9b384d7',
        },
        formContainer: {
            borderWidth: 1,
            padding: 15,
            backgroundColor: '#fae1d0',
            borderRadius: 12,
            justifyContent: 'space-evenly'
        }
    });

    async function handleSubmit() {
        const logedUser = {
            email: email,
            password: password,
            from: 'signUpForm'
        }
        await dispatch(userActions.signInUser(logedUser));
    };

    if (message) {
        setTimeout(function () {
            navigation.navigate("Store");
        }, 1000);
    }
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={{ height: height, justifyContent: 'flex-start' }} >
            <ImageBackground style={styles.authBanner} source={Banner} resizeMethod='auto' resizeMode="cover" >
                <View style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} ></View>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, textAlign: 'center', width: '50%',fontFamily: 'Thunder-Love', color: '#581C0C' }} >Perfil</Text>
                <Image source={cody} style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} resizeMethod='auto' resizeMode='cover' />
            </ImageBackground>
            <View style={styles.authContainer} >
                <Form
                    onButtonPress={() => handleSubmit()}
                    buttonText='INGRESAR'
                    buttonStyle={{ backgroundColor: '#f9b384d7' }}
                    buttonTextStyle={{ fontFamily: 'Thunder-Love', color: '#581C0C', fontWeight:'800'}}
                    style={styles.formContainer}
                >
                    <Text style={[styles.text.primary, { textAlign: 'center', fontSize: 25, marginBottom: 10, fontFamily: 'Thunder-Love', color: '#581C0C' }]}>Iniciar sesion</Text>
                    <FormItem
                        label="Email"
                        isRequired
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        asterik
                        showErrorIcon
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        textInputStyle={{ color: '#000' }}
                    />
                    <FormItem
                        label="Contraseña"
                        isRequired
                        value={password}
                        onChangeText={(pass) => setPassword(pass)}
                        asterik
                        showErrorIcon
                        textContentType='password'
                        secureTextEntry
                    />
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 15, marginBottom:10, fontFamily: 'Mochy', color: '#581C0C' }}>¿Primera vez por aquí?</Text>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("SignUp")}>
                            <Text style={[styles.text.primary, { textAlign: 'center', fontSize: 25, textDecorationLine: 'underline', fontFamily: 'Thunder-Love', color: '#581C0C' }]}>Registrate!</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>
        </View>
    )
}
export default SignIn;