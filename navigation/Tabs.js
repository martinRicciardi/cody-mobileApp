import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StoreStack from './StoreStack';
import ShoppingStack from './ShoppingStack';
import AuthStack from './AuthStack';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Store'
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: { height: 45, backgroundColor: '#00695c' }
            }}>
            <Tab.Screen
                name='Store Stack'
                component={StoreStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="store" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Shopping Stack'
                component={ShoppingStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Entypo name="shopping-cart" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Account'
                component={AuthStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={24} color="white" />
                }}
            />
        </Tab.Navigator>
    )
}