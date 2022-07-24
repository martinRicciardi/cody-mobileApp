import { Form, FormItem, Picker } from 'react-native-form-component';
import { StyleSheet, View, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import heroBg from '../assets/banner-hero3.jpg'
// import dataActions from '../redux/actions/dataActions';
// import bgCity from './../assets/city-body.jpg'
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
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { height, width } = useWindowDimensions()
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
        authContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            padding: 30
        },
        formContainer: {
            borderWidth: 1,
            padding: 20,
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 12
        },
        inputContainer: {
            // marginTop: 20,
            width: '100%',
            height: 35,
            justifyContent: 'center',
            marginTop: 15
        },
        input: {
            borderWidth: 1,
            backgroundColor: "white",
            width: '100%',
            height: 40,
            padding: 3,
            borderRadius: 5,
        },
        btnBack: {
            container: {
                paddingHorizontal: 20,
                borderWidth: 3,
                borderColor: 'white',
                backgroundColor: '#00695c',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
            },
            text: {
                textTransform: "uppercase",
                color: 'white'
            }
        },
        btnMoreInfo: {
            container: {
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                backgroundColor: '#00695c',
                textAlign: "center",
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
            },
            text: {
                textTransform: "uppercase",
                color: 'white'
            }
        },
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
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        textContainer: {
            height: "50%",
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 60
        },
        navigateButtons: {
            height: "25%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center"
        }
    });

    // useEffect(() => {
    //     if (countryList.length < 1) {
    //         dispatch(dataActions.getCountries());
    //     }
    //     // eslint-disable-next-line
    // }, []);

    // let countriesFetch = useSelector(store => store.dataReducer.countries);
    // let countryList = []

    // countriesFetch.length > 0 &&
    //     countriesFetch.map(country => countryList.push({ label: country, value: country }));

    // Sign Up Form
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

    if (message !== '') {
        setTimeout(function () {
            navigation.navigate("Profile");
        }, 100000);
    }
    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }
    return (
        <ScrollView>

                <ImageBackground style={heroStyles.heroContainer} source={heroBg} resizeMethod='auto' resizeMode="cover" >
                    <View style={heroStyles.textContainer} >
                        <Text variant='h1' style={{ marginVertical: 20, fontSize: 40 }} >CODY</Text>
                        <Text variant='h3' style={{ fontSize: 20 }} >Coffe & Code</Text>
                    </View>
                </ImageBackground >

            <ImageBackground style={styles.authContainer} resizeMethod='auto' resizeMode="cover" >
                <Form
                    onButtonPress={() => handleSubmit()}
                    buttonText='SIGN UP'
                    buttonStyle={{ backgroundColor: '#00695c' }}
                    style={styles.formContainer}
                >
                    <Text style={[styles.text.primary, { textAlign: 'center', marginBottom: 10 }]}>Sign Up</Text>

                    <FormItem
                        label="First Name"
                        isRequired
                        value={firstName}
                        onChangeText={(name) => setFirstName(name)}
                        asterik
                        showErrorIcon
                        textContentType='givenName'
                        keyboardType='default'
                        textInputStyle={{ color: '#00695c' }}
                    />
                    <FormItem
                        label="Last Name"
                        isRequired
                        value={lastName}
                        onChangeText={(lastname) => setLastName(lastname)}
                        asterik
                        showErrorIcon
                        textContentType='familyName'
                        keyboardType='default'
                        textInputStyle={{ color: '#00695c' }}
                    />
                    {/* {countryList.length > 0 &&
                        <Picker
                            items={countryList}
                            label="Country"
                            asterik
                            isRequired
                            selectedValue={country}
                            placeholder='------ Select your country ------'
                            textAlign='center'
                            onSelection={(item) => setCountry(item.value)}
                        />
                    } */}

                    <FormItem
                        label="Photo URL"
                        value={image}
                        onChangeText={(photo) => setImage(photo)}
                        showErrorIcon
                        textContentType='URL'
                        keyboardType='url'
                        textInputStyle={{ color: '#00695c' }}
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
                        textInputStyle={{ color: '#00695c' }}
                    />
                    <FormItem
                        label="Password"
                        isRequired
                        value={password}
                        onChangeText={(pass) => setPassword(pass)}
                        asterik
                        showErrorIcon
                        textContentType='password'
                        secureTextEntry
                    />
                    <FormItem
                        label="Repeat your password"
                        isRequired
                        value={password2}
                        onChangeText={(pass) => setPassword2(pass)}
                        asterik
                        showErrorIcon
                        textContentType='password'
                        secureTextEntry
                    />
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Already registered?</Text>
                        <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Profile")}>
                            <Text style={[styles.text.primary, { textAlign: 'center', fontSize: 30, textDecorationLine:'underline' }]}>Sign In!</Text>
                        </TouchableOpacity>
                    </View>

                </Form>
            </ImageBackground>
                <View style={heroStyles.navigateButtons}>
                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("Profile")}>
                        <View style={{ height: "50%", flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
                        <Text style={{ borderWidth: 2, backgroundColor: "#ccc", padding: 10 }} >
                            Inicia sesión
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor="#000" activeOpacity={0.6} onPress={() => navigation.navigate("SignUp")}>
                        <View style={{ height: "50%", flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 40, paddingHorizontal: 20 }}>
                        <Text style={{ borderWidth: 2, backgroundColor: "#ccc", padding: 10 }} >
                            Registrate
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    )
}
export default SignUp;









// import React,{useState} from "react";
// import {connect} from 'react-redux'
// import userActions from "../redux/actions/userActions";

// function SignUp(props) {
//     const [showpass, setShowPass] = useState(false)
//     const [firstName,setFirstName] = useState("")
//     const [lastName,setLastName] = useState("")
//     const [userPhoto,setUserPhoto] = useState("")
//     const [country,setCountry] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [passwordRepeat, setPasswordRepeat] = useState("")

//     var countries = ["","Mexico","U.S.A.","Brazil","Argentina","China","Japan","Spain","England","France","Italy","Belgium"]

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const userData = {
//             firstName: firstName,
//             lastName: lastName,
//             image: userPhoto,
//             email: email,
//             password: password,
//             passwordRepeat: passwordRepeat,
//             country: country,
//             method: "signUpForm"
//         }
//         props.signUpUser(userData)
//     }
//     return (
//         <>
            
//         </>
//     );
// }
// const mapDispatchToProps = {
//     signUpUser: userActions.signUpUsers
// }
// const mapStateToProps = (state) => {
//     return {
//         message: state.userReducer.message
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignUp)