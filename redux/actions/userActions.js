import axios from "axios";   //importamos axios porque vamos a fechear
import { AsyncStorage } from 'react-native';

const userActions = {

    signUpUsers: (userData) => { //funcion

        return async (dispatch, getState) => { //propiedades de despacho y estado
            try {
                const res = await axios.post('https://cody-coffe-api.herokuapp.com/api/auth/signup', { userData })

                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message, // SNACKBAR
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }
        }
    },


    signInUser: (logedUser) => {

        return async (dispatch, getState) => {

            const res = await axios.post('https://cody-coffe-api.herokuapp.com/api/auth/signin', { logedUser }) //aca tenia get y es .post
            if (res.data.success) {
                await AsyncStorage.setItem('@token', res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: res.data
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        message: res.data.message
                    }
                })

            } return res

        }
    },

    signOutUser: () => {
        return async (dispatch, getState) => {
            await AsyncStorage.removeItem('@token')
            dispatch({
                type: 'LOG_OUT'
            })
        }
    },

    VerificateToken: (token) => {

        return async (dispatch, getState) => {
            await axios.get('https://cody-coffe-api.herokuapp.com/api/auth/signInToken', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
                .then(user => {
                    if (user.data.success) {
                        dispatch({ type: 'USER', payload: user.data.response });
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        });
                    } else { localStorage.removeItem('token') }
                }
                ).catch(error => {
                    if (error.response.status === 401)
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: "Please, sign In Again",
                                success: false
                            }
                        })
                    localStorage.removeItem('token')
                })
        }
    }

}


export default userActions