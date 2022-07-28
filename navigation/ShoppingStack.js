import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './../screens/ShoppingCart';
import CheckoutForm from './../components/CheckoutForm';

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
                component={Paypal}
                options={{
                    headerShown: false
                }}
            />
        </ShoppingStackNavigator.Navigator>
    )

}
