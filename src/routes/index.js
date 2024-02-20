import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Load from "../screens/home/Load";
import Welcome from "../screens/home/Welcome";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import RegisterTwo from "../screens/auth/RegisterTwo";
import Home from "../screens/home/Home";
import ProductInformation from "../screens/products/ProductInformation";
import Perfil from "../screens/perfil/Perfil";
import EditPerfil from "../screens/perfil/EditPerfil";
import ShoppingCart from "../screens/buyout/ShoppingCart";
import Buy from "../screens/buyout/Buy";
import Chat from "../screens/chat/Chat";
import ForgetPassword from "../screens/auth/ForgetPassword";
import NewPassword from "../screens/auth/NewPassword";
import ProductMix from "../screens/products/ProductMix";
import PrivateChat from "../screens/chat/PrivateChat";
import UserInfo from "../screens/chat/UserInfo";
import Userlocation from "../screens/maps/Userlocation";
import MapDelivery from "../screens/maps/MapDelivery";
import ActivateLocation from "../screens/maps/ActivateLocation";
import ProductOrder from "../screens/products/ProductOrder";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Load"
        component={Load}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={ActivateLocation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="userLocation"
        component={Userlocation}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#161B21",
          },
          headerTitleStyle: {
            color: "#fff",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          title: "Mi ubicación",
        }}
      />
      <Stack.Screen
        name="mapLocation"
        component={MapDelivery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterTwo"
        component={RegisterTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Information"
        component={ProductInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mix"
        component={ProductMix}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={ProductOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#161B21",
          },
          headerTitleStyle: {
            color: "#fff",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="EditPerfil"
        component={EditPerfil}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#161B21",
          },
          headerTitleStyle: {
            color: "#fff",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          title: "Editar perfil",
        }}
      />
      <Stack.Screen
        name="Carrito"
        component={ShoppingCart}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#161B21",
          },
          headerTitleStyle: {
            color: "#fff",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          title: "Tú carrito",
        }}
      />
      <Stack.Screen
        name="Compra"
        component={Buy}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#161B21",
          },
          headerTitleStyle: {
            color: "#fff",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          title: "Fiesta Dizzgo",
        }}
      />
      <Stack.Screen
        name="ChatPrivate"
        component={PrivateChat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatInformation"
        component={UserInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
