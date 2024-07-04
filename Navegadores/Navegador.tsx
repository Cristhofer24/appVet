import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ScreenBienvenido from "../Screens/ScreenBienvenido";
import ScreenRegistro from "../Screens/ScreenRegistro";
import ScreenConsulta from "../Screens/ScreenConsulta";
import ScreenEditar from "../Screens/ScreenEditar";
import ScreenLista from "../Screens/ScreenLista";

//BottonTab
const Tab = createBottomTabNavigator()

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={ScreenRegistro} />
            <Tab.Screen name="Consulta" component={ScreenConsulta} />
            <Tab.Screen name="Editar" component={ScreenEditar} />
            <Tab.Screen name="Lista" component={ScreenLista} />
        </Tab.Navigator>
    )
}

//StackNavigator
const Stack = createStackNavigator()
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="bienvenido" component={ScreenBienvenido} options={{ headerShown:false }}/>
            <Stack.Screen name="Bottom" component={Tabs} options={{ headerShown:true }}/>
        </Stack.Navigator>
    )
}

export default function Navegador() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}