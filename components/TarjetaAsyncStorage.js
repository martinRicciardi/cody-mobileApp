import { AsyncStorage } from 'react-native';

const TARJETA_KEY = '@tarjeta:key'

async function saveTarjetas(tarjetas){

    try {
        await AsyncStorage.setItem(TARJETA_KEY, JSON.stringify(tarjetas))
        return JSON.stringify(tarjetas)
    } catch (error) {
        console.log('Error de sintaxis')
        return 'Datos de tarjeta erróneos'
    }
}

async function getTarjetas(){
    try {
        const item = await AsyncStorage.getItem(TARJETA_KEY)
        return JSON.parse(item)
    } catch (error) {
        console.log('Error de sintaxis')
        return null
    }
}

async function deleteTarjetas(){

    try {
        await AsyncStorage.removeItem(TARJETA_KEY)
        const item = await AsyncStorage.getItem(TARJETA_KEY)
        return (item===null? 'Tarjeta Eliminada': 'Error al eliminar tarjeta')
    } catch (error) {
        console.log('Error de sintaxis')
        return null
    }
}

export { saveTarjetas, getTarjetas, deleteTarjetas}