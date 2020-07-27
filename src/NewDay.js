import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';

export default function NewDay({ navigation }) {
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
                  navigation.navigate('Profile');
                }}>
                Hello Christian
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.titleText}>New Day </Text>
      </View>

      <View>
        <Text style={styles.label}>Current Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter current location here"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          onChangeText={(val) => this.onChangeText('location', val)}
        />

        <Text style={styles.label}>Destination</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter destination here"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          onChangeText={(val) => this.onChangeText('destination', val)}
        />

        <RadioGroup
          getChecked="0"
          RadioGroupStyle={{ flexDirection: 'row' }}>
          <Radio
            iconName={'lens'}
            label={'Public Transport       '}
            value={'A'}
          />
          <Radio iconName={'lens'} label={'Private Transport'} value={'B'} />
        </RadioGroup>

        <RadioGroup
          getChecked="0"
          RadioGroupStyle={{ flexDirection: 'row' }}>
          <Radio
            iconName={'lens'}
            label={'Car                             '}
            value={'C'}
          />
          <Radio iconName={'lens'} label={'Motocycle (Bike)'} value={'D'} />
        </RadioGroup>

        <Text style={styles.label}>Vehicle Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter vehicle number here"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          onChangeText={(val) => this.onChangeText('vehicle_number', val)}
        />

        <Text style={styles.label}>How many passengers?</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter number of paasengers here"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          onChangeText={(val) => this.onChangeText('passenger', val)}
        />

        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <Text
              style={styles.btnText}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              Create
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

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    color: '#364471',
    marginTop: 10,
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
});
