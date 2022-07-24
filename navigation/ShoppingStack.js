import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './../screens/ShoppingCart';

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
        </ShoppingStackNavigator.Navigator>
    )

}
