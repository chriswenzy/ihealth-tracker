import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SignIn extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
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
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('email', val)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter password here"
            autoCapitalize="characters"
            secureTextEntry={true}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('password', val)}
          />

          <Text
            style={styles.label1}
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            Don’t have an account? Sign up
          </Text>

          <View style={styles.container}>
            <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

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
