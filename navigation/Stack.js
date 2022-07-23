import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './../screens/Home';


export default function Stack() {
const StoreStackNavigator = createNativeStackNavigator();
    return (
        <StoreStackNavigator.Navigator
            initialRouteName='Home'
        >
            <StoreStackNavigator.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </StoreStackNavigator.Navigator>
    )

}
