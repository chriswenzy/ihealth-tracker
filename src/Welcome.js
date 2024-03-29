import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  Image,
  TouchableOpacity,
} from 'react-native'
import { goToAuth } from './navigation'
import {Navigation} from 'react-navigation';

import { USER_KEY } from './config'

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
  render() {
    return (
     <TouchableOpacity onPress={this.props.onPress} style={styles.container} >
        <View>
        <View style={styles.img}> 
            <Image source={require('../assets/logo.png')} style={styles.logo}  />
        </View>

        <View>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.noteText}>Health tracking system that tracks and keeps your record in a secure environment</Text>
        </View>

        <View style={styles.container}>

            <View style={styles.btnContainer}>
                <Text
                style={styles.btnText1 }
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}>
                Login
              </Text>
            </View>

            <View style={styles.btnContainer1}>
                <Text
                style={styles.btnText }
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}>
                Sign Up
              </Text>
            </View>

        </View>
       
      </View>
     </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    justifyContent: "space-evenly",

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
    textAlign: "left",
    marginLeft: 30,
    color: '#364471',
  },

  noteText:{
    fontSize: 17,
    fontWeight: "normal",
    color: '#364471',
    textAlign: "left",
    margin: 25,
  },

  btnContainer: {
    backgroundColor: '#364471',
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius: 25,
    textAlign: 'center',
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

  btnContainer1: {
    backgroundColor: 'white',
    paddingVertical:12,
    paddingHorizontal:12,
    borderColor: '#364471',
    borderWidth: 2,
    borderRadius: 25,
    textAlign: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,

    marginTop: 30,
  },

  btnText:{
    color: '#364471',
    fontSize: 18,
    width: 200,
  },

  btnText1:{
    color: 'white',
    fontSize: 18,
    width: 200,
    
  }
})