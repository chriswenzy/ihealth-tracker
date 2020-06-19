import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <TouchableOpacity style={styles.container} >

          <View style={styles.img}> 
            <Image source={require('../assets/logo.png')} style={styles.logo}  />
          </View>

          <Text style={styles.titleText}>Account Setup</Text>
          <View >

              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('username', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('password', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('email', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('phone_number', val)}
              />
              <Text style={styles.label1}
              onPress={() => {
                this.props.navigation.navigate('SignIn');
              }}             
              >Already have an account? Log In</Text>

          <View style={styles.container}>
              <View style={styles.btnContainer}>
                    <Text
                    style={styles.btnText }
                    onPress={() => {
                      this.props.navigation.navigate('SignIn');
                    }}>
                    Register
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
    marginTop: -80,
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
      marginBottom: 20,
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