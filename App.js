import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from './Components/LoadingPage.js';
import LoginPage from './Components/LoginPage.js';
import RegisterPage from './Components/RegisterPage.js';
import TermsOfService from './Components/TermsOfService.js';
import Nav from './routes/Nav.js'
export default function App() {
    const Stack = createStackNavigator(); 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="LoadingPage" 
                    component={LoadingPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="LoginPage" 
                    component={LoginPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="RegisterPage" 
                    component={RegisterPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="TermsOfService" 
                    component={TermsOfService} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Nav" 
                    component={Nav} 
                    options={{ headerShown: false }} 
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // Styles can go here
});
