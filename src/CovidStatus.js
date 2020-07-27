import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  CheckBox,
} from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';

export default function Status({ navigation }) {
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
        <Text style={styles.titleText}>Profile </Text>
      </View>

      <View>
        <RadioGroup
          getChecked="0"
          RadioGroupStyle={{ flexDirection: 'row' }}>
          <Radio
            iconName={'lens'}
            label={'Positive              '}
            value={'A'}
          />
          <Radio iconName={'lens'} label={'Negative'} value={'B'} />
        </RadioGroup>

        <Text style={styles.label}>When did your symptom start?</Text>
        <TextInput
          style={styles.input}
          placeholder="Please answer sincerely"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          // onChangeText={val => this.onChangeText('symptom', val)}
        />

        <Text style={styles.label}> When did you test?</Text>
        <TextInput
          style={styles.input}
          placeholder="Please answer sincerely"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          // onChangeText={val => this.onChangeText('tested', val)}
        />

        <Text style={styles.label}>What was the result?</Text>
        <TextInput
          style={styles.input}
          placeholder="Please answer sincerely"
          autoCapitalize="none"
          placeholderTextColor="#B3B4B9"
          // onChangeText={val => this.onChangeText('result', val)}
        />

        <CheckBox />
        <View style={{ flexDirection: 'row' }}>
          <CheckBox value={'0'} />
          <Text style={{ margin: 6 }}>
            {' '}
            Please provide only verified information
          </Text>
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
