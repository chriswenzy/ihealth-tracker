import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native'

import { goHome } from './navigation'
import { USER_KEY } from './config'

export default class SignIn extends React.Component {
  state = {
    email: '', password: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const { email, password } = this.state
    try {
      
       const user = await AsyncStorage.setItem(USER_KEY, email)
       console.log('user successfully signed in!', user)
       goHome()
    } catch (err) {
      console.log('error:', err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: 'red',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})