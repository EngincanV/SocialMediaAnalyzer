import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, Alert } from "react-native";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as RootNavigation from "./src/helper/RootNavigation";

import HomeScreen from './src/pages/HomeScreen'
import Register from './src/pages/Register'
import TabNavigationPage from "./src/helper/TabNavigator";
import AsyncStorage from '@react-native-community/async-storage';
import PublicAccountAnalysis from './src/pages/PublicAccountAnalysis';
import PublicAccountNotToBeFollowed from "./src/pages/PublicAccountNotToBeFollowed";

const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  componentDidMount = async () => {
    const val = await AsyncStorage.getItem("username");
    if (val !== null)
      this.setState({ isLoggedIn: true });
  }
  render() {
    return (
      <NavigationContainer ref={RootNavigation.navigationRef}>
        <Stack.Navigator>
          {
            this.state.isLoggedIn ? (
              <React.Fragment>
                <Stack.Screen name="MainPage" options={{
                  headerRight: () => (
                    <Button
                      onPress={async () => { await AsyncStorage.clear(); this.setState({ isLoggedIn: false }); RootNavigation.navigate("Home") }}
                      title="Logout"
                      color="#428AF8"
                    />
                  ),
                  headerTitle: ""
                }} >
                  {props => <TabNavigationPage {...props} />}
                </Stack.Screen>
                <Stack.Screen name="PublicAccountAnalysis" component={PublicAccountAnalysis} options={{ headerShown: false }} />
                <Stack.Screen name="PublicAccountNotToBeFollowed" component={PublicAccountNotToBeFollowed} options={{ headerShown: false }}/>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                  <Stack.Screen name="MainPage" options={{
                    headerRight: () => (
                      <Button
                        onPress={async () => { await AsyncStorage.clear(); this.setState({ isLoggedIn: false }); RootNavigation.navigate("Home") }}
                        title="Logout"
                        color="blue"
                      />
                    ),
                    headerTitle: "",
                  }} >
                    {props => <TabNavigationPage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name="PublicAccountAnalysis" component={PublicAccountAnalysis} options={{ headerShown: false }}/>
                  <Stack.Screen name="PublicAccountNotToBeFollowed" component={PublicAccountNotToBeFollowed} options={{ headerShown: false }}/>
                </React.Fragment>
              )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
