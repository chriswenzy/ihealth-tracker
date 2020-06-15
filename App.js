import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home'
import Screen2 from './src/Screen2';
import Initialising from './src/Initializing';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Initializing" component={Initialising}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
