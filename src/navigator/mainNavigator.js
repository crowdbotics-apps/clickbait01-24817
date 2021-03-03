import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */ import Splash12210769 from "../features/Splash12210769/navigator"
import SignIn213210770 from "../features/SignIn213210770/navigator"
import SignUp214210771 from "../features/SignUp214210771/navigator"
import ForgotPassword15210772 from "../features/ForgotPassword15210772/navigator"
import Contacts16210784 from "../features/Contacts16210784/navigator"
import SignUp2106210874 from "../features/SignUp2106210874/navigator"

const AppNavigator = {
  SignUp2106210874: { screen: SignUp2106210874 },
  Contacts16210784: { screen: Contacts16210784 },
  ForgotPassword15210772: { screen: ForgotPassword15210772 },
  SignUp214210771: { screen: SignUp214210771 },
  SignIn213210770: { screen: SignIn213210770 },
  Splash12210769: { screen: Splash12210769 },
  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
