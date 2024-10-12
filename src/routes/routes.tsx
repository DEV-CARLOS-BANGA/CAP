import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

// SCREENS

import Home from '../screens/Home';
import JUCAP from '../screens/jucap';
import SOCICIEDADE_SENHORAS from '../screens/sociedade_senhoras';
import SOCICIEDADE_SENHORES from '../screens/sociedade_senhores';
import CASA_PAZ from '../screens/casas_paz';
import CONGRAGACOES from '../screens/congregacoes';
import FAMILAS_ACOMPANHAMENTO from '../screens/familias_acompanhamento';
import PROTOCOLOS from '../screens/protocolo';
import MULTIMIDIA from '../screens/multimidia';
import ACCAO_SOCIAL from '../screens/accao_social';
import VOLUNTARIOS from '../screens/voluntarios';
import MINISTERIO_LOUVOR from '../screens/ministerio_louvor';
import PROGRAMAS_ACTIVIDADES from '../screens/programas_actividades';
import CORAIS from '../screens/corais';
import LOJA from '../screens/loja';
import CONTACTOS from '../screens/contactos';
import SOBRE from '../screens/sobre';


const Stack = createStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Home' component={Home}></Stack.Screen>
                <Stack.Screen name='Jucap' component={JUCAP}></Stack.Screen>
                <Stack.Screen name='Sociedade_senhoras' component={SOCICIEDADE_SENHORAS}></Stack.Screen>
                <Stack.Screen name='Sociedade_senhores' component={SOCICIEDADE_SENHORES}></Stack.Screen>
                <Stack.Screen name='Casa_Paz' component={CASA_PAZ}></Stack.Screen>
                <Stack.Screen name='Congregacoes' component={CONGRAGACOES}></Stack.Screen>
                <Stack.Screen name='familias_casais' component={FAMILAS_ACOMPANHAMENTO}></Stack.Screen>
                <Stack.Screen name='protocolo' component={PROTOCOLOS}></Stack.Screen>
                <Stack.Screen name='multimidia' component={MULTIMIDIA}></Stack.Screen>
                <Stack.Screen name='accao_social' component={ACCAO_SOCIAL}></Stack.Screen>
                <Stack.Screen name='voluntarios' component={VOLUNTARIOS}></Stack.Screen>
                <Stack.Screen name='ministerio_louvor' component={MINISTERIO_LOUVOR}></Stack.Screen>
                <Stack.Screen name='programas_actividades' component={PROGRAMAS_ACTIVIDADES}></Stack.Screen>
                <Stack.Screen name='corais' component={CORAIS}></Stack.Screen>
                <Stack.Screen name='loja' component={LOJA}></Stack.Screen>
                <Stack.Screen name='contactos' component={CONTACTOS}></Stack.Screen>
                <Stack.Screen name='sobre' component={SOBRE}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}