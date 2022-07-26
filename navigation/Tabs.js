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
            initialRouteName='Store Stack'
            screenOptions={{
                tabBarStyle: { height: 45, backgroundColor: '#fae1d0' },
                // tabBarShowLabel: false
            }}>
            <Tab.Screen
                name='Tienda'
                component={StoreStack}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor:'black',
                    tabBarInactiveTintColor: '#4a0000',
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="store" size={24} color={"#4a0000"} />
                }}
            />
            <Tab.Screen
                name='Pedido'
                component={ShoppingStack}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor:'black',
                    tabBarInactiveTintColor: '#4a0000',
                    tabBarIcon: ({ color, size }) => <Entypo name="shopping-cart" size={24} color="#4a0000" />
                }}
            />
            <Tab.Screen
                name='Cuenta'
                component={AuthStack}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor:'black',
                    tabBarInactiveTintColor: '#4a0000',
                    tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={24} color="#4a0000" />
                }}
            />
        </Tab.Navigator>
    )
}