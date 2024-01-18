import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Load from '../screens/home/Load'
import Login from '../screens/auth/Login'
import Chat from '../screens/chat/Chat'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
            <Stack.Screen name='Load' component={Load} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Chat' component={Chat} />
       </Stack.Navigator> 
    )
}
