import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';

export default function Profile({ navigation }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <View style={styles.imgCover}>
            <Image
              source={require('../assets/user.png')}
              style={styles.userImg}
            />
            <View>
              <Text
                style={styles.userName}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                Hello Christian
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.btnContainer1}>
          <Text
            style={styles.btnText1}
            onPress={() => {
              navigation.navigate('Status');
            }}>
            UPDATE COVID-19 STATUS
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.label}>Home Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter home address here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('Home', val)}
          />

          <Text style={styles.label}>Town</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter town here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('town', val)}
          />

          <Text style={styles.label}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter state here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('state', val)}
          />

          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter country here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('country', val)}
          />

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter username here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('username', val)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter email here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('email', val)}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter phone number here"
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('phone_number', val)}
          />

          <Text style={styles.label}>Set Reminder</Text>
          <Picker style={styles.input}>
            <Picker.Item label="15mins Interval" value="15mins" />
            <Picker.Item label="30mins Interval" value="30min" />
            <Picker.Item label="45mins Interval" value="45min" />
            <Picker.Item label="60mins Interval" value="60min" />
          </Picker>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter password here"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('password', val)}
          />

          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter new password here"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('password', val)}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <Text
              style={styles.btnText}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              Update
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },

  header: {
    height: 150,
    width: '100%',
    backgroundColor: '#364471',
    borderBottomRightRadius: 150,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    marginTop: 40,
    marginLeft: 10,
  },
  userImg: {
    width: 60,
    height: 60,
  },
  imgCover: {
    flexDirection: 'row',
    width: '100%',
  },

  userName: {
    marginLeft: 35,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
    flexDirection: 'column',
    marginTop: 18,
  },

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

  label: {
    marginLeft: 10,
    color: '#364471',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 7,
  },

  btnContainer1: {
    // flex:1,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    // height: 200,
    margin: 18,
  },

  btnContainer: {
    // flex:1,
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
    // height: 200,
    marginTop: 10,
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    width: 200,
    textAlign: 'center',
  },

  btnText1: {
    color: 'white',
    fontSize: 13,
    width: 200,
    textAlign: 'center',
  },
});
