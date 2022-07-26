import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Store from '../screens/Store';
import Menu from '../screens/Menu';

export default function Stack() {
    const StoreStackNavigator = createNativeStackNavigator();
    return (
        <StoreStackNavigator.Navigator
            initialRouteName='Store'
        >
            <StoreStackNavigator.Screen
                name='Store'
                component={Store}
                options={{
                    headerShown: false
                }}
            />
            
            <StoreStackNavigator.Screen
                name='Menu'
                component={Menu}
                options={{
                    headerShown: false
                }}
            />
        </StoreStackNavigator.Navigator>
    )

}
