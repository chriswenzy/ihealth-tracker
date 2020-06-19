import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home'
import Screen2 from './src/Screen2';
import Initialising from './src/Initializing';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import SetUp from './src/SetUp';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Initializing" component={Initialising}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SetUp" component={SetUp}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
