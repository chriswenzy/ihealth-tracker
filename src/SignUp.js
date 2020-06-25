import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native'
import Constants from 'expo-constants';

export default class SignUp extends React.Component {
  
  render() {
    return (
          <ScrollView> 
            <View style={styles.container}>
         
             <View style={styles.img}> 
            <Image source={require('../assets/logo.png')} style={styles.logo}  />
          </View>

          <Text style={styles.titleText}>Create account</Text>
          <View >

              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter username here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('username', val)}
              />

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter email here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('email', val)}
              />

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter phone number here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('phone_number', val)}
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter password here'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('password', val)}
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
                        this.props.navigation.navigate('SetUp');
                      }}>
                      Register
                    </Text>
                </View>
            </View>
          </View>
          </View>
          </ScrollView>         
     
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
    flex: 1,
    },

  logo:{
    flex: 1,
    width: 200,
    height: 240,
    resizeMode: "contain",
    alignSelf: "center",
    },

  titleText:{
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: '#364471',
      marginBottom: 20,
    },

  label:{
   marginLeft: 10, 
   color: '#364471',
   fontSize: 15,
   fontWeight: "bold",
   marginTop: 7,
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
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: "screenHeight",
  },

  btnContainer: {
    flex:1,
    backgroundColor: '#364471',
    paddingVertical:10,
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
    marginTop: 30, 
    marginBottom: 30, 
  },

  btnText:{
    color: 'white',
    fontSize: 18,
    textAlign: "center",
  },
})