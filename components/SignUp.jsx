import { Form, FormItem, Picker } from 'react-native-form-component';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Banner from '../assets/banner-store.jpg'
import cody from '../assets/cody2.png'
// import AppLoading from 'expo-app-loading';
// import { Comfortaa_500Medium } from '@expo-google-fonts/comfortaa';
// import { useFonts, Charm_400Regular } from '@expo-google-fonts/charm';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    // const [country, setCountry] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // let [fontsLoaded] = useFonts({
    //     Charm_400Regular,
    //     Comfortaa_500Medium
    // })
    let errors = useSelector(store => store.userReducer.errors);
    let message = useSelector(store => store.userReducer.message);

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
        const userData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            // country: country,
            image: image.trim(),
            email: email.trim(),
            password: password,
            passwordRepeat: password2,
            method: 'signUpForm',
        };

        dispatch(userActions.signUpUsers(userData));

    };

    // if (message !== '') {
    //     setTimeout(function () {
    //         navigation.navigate("Profile");
    //     }, 100000);
    // }
    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }
    return (
        <ScrollView>

            <ImageBackground style={styles.authBanner} source={Banner} resizeMethod='auto' resizeMode="cover" >
                <View style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} ></View>
                <Text variant='h2' style={{ fontSize: 20, backgroundColor: '#f9b384d7', padding: 10, borderRadius: 10, textAlign: 'center', width: '50%' }} >Perfil</Text>
                <Image source={cody} style={{
                    // flexGrow:1,
                    width: '30%',
                    height: '100%'
                }} resizeMethod='auto' resizeMode='cover' />
            </ImageBackground>

            <ImageBackground style={styles.authContainer} resizeMethod='auto' resizeMode="cover" >
                <Form
                    onButtonPress={() => handleSubmit()}
                    buttonText='Registrarse'
                    buttonStyle={{ backgroundColor: '#f9b384d7' }}
                    style={styles.formContainer}
                >
                    <Text style={[styles.text.primary, { textAlign: 'center', marginBottom: 10, fontSize: 30 }]}>Registro</Text>

                    <FormItem
                        label="Nombre"
                        isRequired
                        value={firstName}
                        onChangeText={(name) => setFirstName(name)}
                        asterik
                        showErrorIcon
                        textContentType='givenName'
                        keyboardType='default'
                        textInputStyle={{ color: '#000' }}
                    />
                    <FormItem
                        label="Apellido"
                        isRequired
                        value={lastName}
                        onChangeText={(lastname) => setLastName(lastname)}
                        asterik
                        showErrorIcon
                        textContentType='familyName'
                        keyboardType='default'
                        textInputStyle={{ color: '#000' }}
                    />
                    <FormItem
                        label="Foto URL"
                        value={image}
                        onChangeText={(photo) => setImage(photo)}
                        showErrorIcon
                        textContentType='URL'
                        keyboardType='url'
                        textInputStyle={{ color: '#000' }}
                    />
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
                    <FormItem
                        label="Confirmar contraseña"
                        isRequired
                        value={password2}
                        onChangeText={(pass) => setPassword2(pass)}
                        asterik
                        showErrorIcon
                        textContentType='password'
                        secureTextEntry
                    />
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Ya estas registrado?</Text>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Profile")}>
                            <Text style={[styles.text.primary, { textAlign: 'center', fontSize: 30, textDecorationLine: 'underline' }]}>Inicia sesión!</Text>
                        </TouchableOpacity>
                    </View>

                </Form>
            </ImageBackground>
        </ScrollView>
    )
}
export default SignUp;