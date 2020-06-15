import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-navigation';

export default function Screen2 ({navigation}) {
  
    return (
      <View style={styles.container}>
        <Text onPress={()=>{navigation.navigate('SignIn')}}>Sign in </Text>
        <Text onPress={()=>{navigation.navigate('SignUp')}}>Sign up </Text>

      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})