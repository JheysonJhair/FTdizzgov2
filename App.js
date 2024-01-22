import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/components/utils/UserContext";

import Routes from "./src/routes";
import "@expo-google-fonts/montserrat";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </UserProvider>
  );
}
