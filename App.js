import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Welcome';
import Home from './src/Home';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import SetUp from './src/SetUp';
import NewDay from './src/NewDay';
import Profile from './src/Profile';
import Status from './src/CovidStatus';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SetUp" component={SetUp} />
        <Stack.Screen name="NewDay" component={NewDay} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
