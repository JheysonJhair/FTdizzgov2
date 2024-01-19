import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Load from '../screens/home/Load'
import Welcome from '../screens/home/Welcome'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import RegisterTwo from '../screens/auth/RegisterTwo'
import Home from '../screens/home/Home'
import Chat from '../screens/chat/Chat'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
            <Stack.Screen name='Load' component={Load} options={{headerShown: false}}/>
            <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='RegisterTwo' component={RegisterTwo} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Chat' component={Chat} />
       </Stack.Navigator> 
    )
}
