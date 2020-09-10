import { StatusBar } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NewsfeedHome from "./components/NestedLeftDrawer";

import { RightDrawerStyling } from "./drawerStyling/RightDrawerStyling";

import MessagesScreen from "./screens/MessagesScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import OffersScreen from "./screens/OffersScreen";
import CalendarScreen from "./screens/CalendarScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

import SearchScreen from "./screens/SearchScreen";

const DrawerRight = createDrawerNavigator();

const getFonts = () =>
  Font.loadAsync({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer theme={DarkTheme}>
        <StatusBar barStyle="light-content" />
        <DrawerRight.Navigator
          drawerPosition="right"
          drawerContent={(props) => <RightDrawerStyling {...props} />}
        >
          <DrawerRight.Screen name="NewsfeedHome" component={NewsfeedHome} />
          <DrawerRight.Screen name="Messages" component={MessagesScreen} />
          <DrawerRight.Screen name="Notifications" component={NotificationsScreen}/>
          <DrawerRight.Screen name="Offers" component={OffersScreen} />
          <DrawerRight.Screen name="Calendar" component={CalendarScreen} />
          <DrawerRight.Screen name="Edit Profile" component={EditProfileScreen}/>
          <DrawerRight.Screen name="Settings" component={SettingsScreen} />
          <DrawerRight.Screen name="Search Screen" component={SearchScreen} />
        </DrawerRight.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
