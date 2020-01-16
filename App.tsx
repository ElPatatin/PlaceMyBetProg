import React from 'react';
import 'react-native-gesture-handler';
import {ListEventsScreen, LoginScreen, RegisterScreen} from 'screens'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Events: {screen: ListEventsScreen},
    Register: {screen: RegisterScreen},
});

const App = createAppContainer(MainNavigator);

export default App;