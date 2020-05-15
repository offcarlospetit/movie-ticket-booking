import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from "scenes/GetStarted";
import Login from "scenes/Login";
import Home from "scenes/Home";
import Profile from "scenes/Profile";
import Theaters from "scenes/Theaters";

const StackStarted = createStackNavigator()
const StackLogin = createStackNavigator()
const Stack = createStackNavigator()
const BottomStackNavigation = createBottomTabNavigator()

function LoginStack() {
    return (
        <StackLogin.Navigator screenOptions={{ headerShown: false }}>
            <StackLogin.Screen name="Login" component={Login} />
        </StackLogin.Navigator>
    );
}
function StartedStack() {
    return (
        <StackStarted.Navigator screenOptions={{ headerShown: false }}>
            <StackStarted.Screen name="GetStarted" component={GetStarted} />
        </StackStarted.Navigator>
    );
}

function BottomStack() {
    return (
        <BottomStackNavigation.Navigator screenOptions={{}}>
            <BottomStackNavigation.Screen name="Home" component={Home} options={{ title: "Movies", headerLargeTitle: true }} />
            <BottomStackNavigation.Screen name="theaters" component={Theaters} />
            <BottomStackNavigation.Screen name="Profile" component={Profile} />
        </BottomStackNavigation.Navigator>
    );
}


function AppNavigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName="Started">
                <Stack.Screen name="Login" component={LoginStack} />
                <Stack.Screen name="Started" component={StartedStack} />
                <Stack.Screen name="Home" children={BottomStack} />
            </Stack.Navigator>
        </NavigationContainer>


    );
}

export default AppNavigation