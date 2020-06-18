import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Image
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

      <TouchableOpacity  onPress={this.props.onPress} style={styles.container} >

         <View style={styles.img}> 
            <Image source={require('../assets/logo.png')} style={styles.logo}  />
        </View>

        <Text style={styles.titleText}>Welcome back</Text>

        <View >
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Please enter email here'
          autoCapitalize="characters"
          autoCorrect={false}
          placeholderTextColor='#B3B4B9'
          onChangeText={val => this.onChangeText('email', val)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Please enter password here'
          autoCapitalize="characters"
          secureTextEntry={true}
          placeholderTextColor='#B3B4B9'
          onChangeText={val => this.onChangeText('password', val)}
        />

        <Text style={styles.label1}
        onPress={() => {
          this.props.navigation.navigate('SignUp');
        }}
        
        >Don’t have an account? Sign up</Text>

          <View style={styles.container}>
              <View style={styles.btnContainer}>
                    <Text
                    style={styles.btnText }
                    onPress={() => {
                      this.props.navigation.navigate('SignIn');
                    }}>
                    Login
                  </Text>
              </View>
          </View>
      </View>
      </TouchableOpacity>
      
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 14,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#F7F7F7',
    margin: 10,
    color: 'black',
    padding: 8,
    borderRadius: 5,

  },

  img:{
    marginTop: -130,
    },

  logo:{
    flex: 1,
    width: 200,
    height: 240,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -60,
    },

    titleText:{
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 10,
      textAlign: "center",
      color: '#364471',
      marginBottom: 30,
    },

  label:{
   marginLeft: 10, 
   color: '#364471',
   fontSize: 18,
   fontWeight: "bold",
   marginTop: 10,
  },

  label1:{
    marginLeft: 10, 
    color: '#364471',
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
   },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  btnContainer: {
    flex:1,
    backgroundColor: '#364471',
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius: 25,
    textAlign: 'center',
    width: 200,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 4,
                },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 100,  
  },

  btnText:{
    color: 'white',
    fontSize: 18,
    
    textAlign: "center",
  },
})