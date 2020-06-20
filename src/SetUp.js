import React from 'react'
import {
  View,
  Picker,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from 'react-native'

export default class SignUp extends React.Component {
  
  render() {
    return (
      <ScrollView style={styles.container} > 

        <View style={styles.img}> 
            <Image source={require('../assets/logo.png')} style={styles.logo}  />
          </View>

          <Text style={styles.titleText}>Account Setup</Text>
          <View >

              <Text style={styles.label}>Home Address</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter home address here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('Home', val)}
              />
             
             <Text style={styles.label}>Town</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter town here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('town', val)}
              />

              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter state here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('state', val)}
              />

              <Text style={styles.label}>Country</Text>
              <TextInput
                style={styles.input}
                placeholder='Please enter country here'
                autoCapitalize="none"
                placeholderTextColor='#B3B4B9'
                onChangeText={val => this.onChangeText('country', val)}
              />

              <Text style={styles.label}>Set Reminder</Text>
              <Picker
                  style={styles.input}
                >
                  <Picker.Item label="15mins Interval" value="15mins" />
                  <Picker.Item label="30mins Interval" value="30min" />
                  <Picker.Item label="45mins Interval" value="45min" />
                  <Picker.Item label="60mins Interval" value="60min" />

              </Picker>

          <View style={styles.container}>
              <View style={styles.btnContainer}>
                    <Text
                    style={styles.btnText }
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}>
                    Submit
                  </Text>
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
    // flex: 1,
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