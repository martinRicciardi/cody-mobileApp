import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './../screens/ShoppingCart';
import CheckoutForm from './../components/CheckoutForm';
import TarjetaScreen from './../screens/TarjetaScreen';
import Finally from './../screens/Finally';


export default function ShoppingStack() {
    const ShoppingStackNavigator = createNativeStackNavigator();
    return (
        <ShoppingStackNavigator.Navigator
            initialRouteName='Shopping Cart'
        >
            <ShoppingStackNavigator.Screen
                name='Shopping Cart'
                component={ShoppingCart}
                options={{
                    headerShown: false
                }}
            />
            <ShoppingStackNavigator.Screen
                name='Checkout'
                component={CheckoutForm}
                options={{
                    headerShown: false
                }}
            />
            <ShoppingStackNavigator.Screen
                name='Card'
                component={TarjetaScreen}
                options={{
                    headerShown: false
                }}
            />
            <ShoppingStackNavigator.Screen
                name='Finally'
                component={Finally}
                options={{
                    headerShown: false
                }}
            />
        </ShoppingStackNavigator.Navigator>
    )

}
