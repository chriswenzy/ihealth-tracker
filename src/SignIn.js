import React,{useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AuthContext} from './context/Authcontext'



const SignIn = ({navigation})=>{
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
  const{login} = useContext(AuthContext)
 
    return (
      <TouchableOpacity  style={styles.container}>
        <View style={styles.img}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.titleText}>Welcome back</Text>
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter email here"
            autoCapitalize="characters"
            autoCorrect={false}
            value={email}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setemail(val)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter password here"
            autoCapitalize="characters"
            secureTextEntry={true}
            value={password}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setpassword(val)}
          />

          <Text
            style={styles.label1}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Don’t have an account? Sign up
          </Text>

          <View style={styles.container}>
            <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={async()=>{
                  const model ={
                    "email": email,
                    "password":password
                  }
                 const data = await login(model)
                 navigation.navigate('Home');
                }
                }>
                Login
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  input: {
    width: 350,
    fontSize: 14,
    fontWeight: '500',
    height: 50,
    backgroundColor: '#F7F7F7',
    margin: 10,
    color: 'black',
    padding: 8,
    borderRadius: 5,
  },

  img: {
    // marginTop: 10,
    //  flex: 1,
  },

  logo: {
    // flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  // textBox:{
  //   marginTop:-100,
  // },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    color: '#364471',
    marginTop: 30,
    marginBottom: 40,
  },

  label: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 18,
    fontWeight: 'bold',
  },

  label1: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },

  btnContainer: {
    backgroundColor: '#364471',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 25,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,

    marginTop: 100,
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
