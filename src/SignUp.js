import React, { useState } from 'react';
import {
  View,
  TextInput,
  Picker,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert
} from 'react-native';
import {ApiService} from './services/Apiservice'

const SignUp = () =>  {
const [proceed, setproceed] = useState(null)
const [fullname, setfullname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [password, setpassword] = useState('')
const [address, setaddress] = useState('')
const [town, settown] = useState('')
const [state, setstate] = useState('')
const [country, setcountry] = useState('')



 
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.img}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
{proceed == null ?<>
        <Text style={styles.titleText}>Create account</Text>
        <View>
          <Text style={styles.label}>Fullname</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter fullname here"
            value ={fullname}
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setfullname(val)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter email here"
            value={email}
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setemail(val)}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter phone number here"
            autoCapitalize="none"
            value={phone}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setphone(val)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter password here"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setpassword(val)}
          />

          <Text
            style={styles.label1}
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}>
            Already have an account? Log In
          </Text>

          <View style={styles.container}>
            <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={()=>{
                 setproceed(true)
                }
                }>
                Proceed
              </Text>
            </View>
          </View>
        </View>
        </>: <> <Text style={styless.titleText}>Account Setup</Text>
        <View>
          <Text style={styless.label}>Home Address</Text>
          <TextInput
            style={styless.input}
            placeholder="Please enter home address here"
            autoCapitalize="none"
            value={address}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setaddress(val)}
          />

          <Text style={styless.label}>Town</Text>
          <TextInput
            style={styless.input}
            placeholder="Please enter town here"
            autoCapitalize="none"
            value={town}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => settown(val)}
          />

          <Text style={styless.label}>State</Text>
          <TextInput
            style={styless.input}
            placeholder="Please enter state here"
            autoCapitalize="none"
            value={state}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) =>setstate(val)}
          />

          <Text style={styless.label}>Country</Text>
          <TextInput
            style={styless.input}
            placeholder="Please enter country here"
            autoCapitalize="none"
            value={country}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => setcountry(val)}
          />

          <Text style={styless.label}>Set Reminder</Text>
          <Picker style={styless.input}>
            <Picker.Item label="15mins Interval" value="15mins" />
            <Picker.Item label="30mins Interval" value="30min" />
            <Picker.Item label="45mins Interval" value="45min" />
            <Picker.Item label="60mins Interval" value="60min" />
          </Picker>

          <View style={styless.container}>
            <View style={styless.btnContainer}>
              <Text
                style={styless.btnText}
                onPress={async() => {
                  const data ={
                    "full_name":fullname,
                    "email": email,
                    "password": password,
                    "phone": phone,
                    "town":town,
                    "address":address,
                    "state":state,
                    "country":country,
                    "reminder":15
                  }
                  console.log(data)
                  const register =  await ApiService.post('users/register', data)
                  Alert.alert(
                    "Registeration Successfull",
                    "Registration",
                     { cancelable: false }
                  );
                }}>
                Submit
              </Text>
            </View>
          </View>
        </View></>}

      </TouchableOpacity>
    );
}

export default SignUp

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

  img: {
    marginTop: -80,
    flex: 1,
  },

  logo: {
    flex: 1,
    width: 200,
    height: 240,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 10,
    textAlign: 'center',
    color: '#364471',
    marginBottom: 20,
  },

  label: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 7,
  },

  label1: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  btnContainer: {
    flex: 1,
    backgroundColor: '#364471',
    paddingVertical: 10,
    borderRadius: 25,
    textAlign: 'center',
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 30,
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

const styless = StyleSheet.create({
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

  img: {
    marginTop: -40,
  },

  logo: {
    flex: 1,
    width: 200,
    height: 240,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -30,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 10,
    textAlign: 'center',
    color: '#364471',
    marginBottom: 20,
  },

  label: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  btnContainer: {
    flex: 1,
    backgroundColor: '#364471',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    textAlign: 'center',
    width: 200,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 30,
    marginBottom: 10,
  },

  btnText: {
    color: 'white',
    fontSize: 18,

    textAlign: 'center',
  },
});