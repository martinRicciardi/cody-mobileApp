import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../components/SignUp'
import SignIn from './../components/SignIn';
import Profile from './../screens/Profile';

export default function AuthStack() {
const AuthNavigator = createNativeStackNavigator();
    return (
        <AuthNavigator.Navigator
            initialRouteName='Profile'
        >
            <AuthNavigator.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
            <AuthNavigator.Screen
                name='SignUp'
                component={SignUp}
                options={{
                    headerShown: false
                }}
            />
            <AuthNavigator.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </AuthNavigator.Navigator>
    )

}
