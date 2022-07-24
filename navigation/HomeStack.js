import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Tabs from './Tabs';

export default function HomeStack() {
    const HomeStackNavigator = createNativeStackNavigator();
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='Home'
        >
            <HomeStackNavigator.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name='Main'
                component={Tabs}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )

}
