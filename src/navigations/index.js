import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from "scenes/GetStarted";
import Login from "scenes/Login";
import Home from "scenes/Home";
import Profile from "scenes/Profile";
import Theaters from "scenes/Theaters";
import MovieDetail from "scenes/MovieDetail";

const StackStarted = createStackNavigator()
const StackLogin = createStackNavigator()
const Stack = createStackNavigator()
const BottomStackNavigation = createBottomTabNavigator()

function LoginStack() {
    return (
        <StackLogin.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName="Started">
            <StackLogin.Screen name="Login" component={Login} />
            <StackLogin.Screen name="Started" component={StartedStack} />
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
        <BottomStackNavigation.Navigator screenOptions={{ gestureEnabled: false }}>
            <BottomStackNavigation.Screen name="Home" component={Home} options={{ title: "Movies", headerLargeTitle: true }} />
            <BottomStackNavigation.Screen name="theaters" component={Theaters} />
            <BottomStackNavigation.Screen name="Profile" component={Profile} />
        </BottomStackNavigation.Navigator>
    );
}

function MovieDetailStack() {
    return (
        <StackStarted.Navigator screenOptions={{ gestureEnabled: true }}>
            <StackStarted.Screen name="Detail" component={MovieDetail} />
        </StackStarted.Navigator>
    );
}


class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    setLogin() {
        this.setState({ isLoggedIn: true })
    }

    render() {
        const LoginScreens = (props) => <LoginStack {...props} setIsLoggedIn={this.setIsLoggedIn} />
        return (
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreens} />
                    <Stack.Screen name="Home" children={BottomStack} />
                    <Stack.Screen name="Detail" children={MovieDetailStack} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AppNavigation