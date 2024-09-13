import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login/login.jsx';
import Registro from "./screens/registro/registro.jsx"
import Registro2 from "./screens/registro2/registro2.jsx"
import Home from './screens/home/home.jsx';
import Favorito from './screens/favoritos/Favorito.jsx';

const Stack = createNativeStackNavigator();

function Routes(){
    return <NavigationContainer>
                <Stack.Navigator>

                 <Stack.Screen name='Favorito' component={Favorito} options={{
                       title: "Favoritos",
                       headerTitleAlign: "center",
                       headerShadowVisible: false
                    }}/>   
                <Stack.Screen name='home' component={Home} options={{
                        headerShown: false
                    }}/>
                <Stack.Screen name='registro2' component={Registro2} options={{
                        //headerShown: false
                        headerShadowVisible: false,
                        title:"",
                        headerBackTitle: "voltar"
                    }}/>
                <Stack.Screen name='registro' component={Registro} options={{
                        //headerShown: false
                        headerShadowVisible: false,
                        title:"",
                        headerBackTitle: "voltar"
                    }}/>
                    <Stack.Screen name='login' component={Login} options={{
                        headerShown: false
                    }}/>
                    
                   
                </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;