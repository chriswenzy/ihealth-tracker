import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

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
        <Text style={styles.titleText}>Your Activities on 20/10/2020 </Text>
      </View>

      <View>
        <View style={styles.listContainer}>
          <Text style={styles.mainText}> Wuse Market and Wuse zone 5</Text>
          <Text style={styles.passengerText}>
            Public transport (5 passengers)
          </Text>
          <Text style={styles.passengerText}>Car (By 9:30am)</Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.mainText}> Wuse Market and Wuse zone 5</Text>
          <Text style={styles.passengerText}>
            Public transport (5 passengers)
          </Text>
          <Text style={styles.passengerText}>Car (By 9:30am)</Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.mainText}> Wuse Market and Wuse zone 5</Text>
          <Text style={styles.passengerText}>
            Public transport (5 passengers)
          </Text>
          <Text style={styles.passengerText}>Car (By 9:30am)</Text>
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

  listContainer: {
    width: 320,
    height: 90,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 5,
    padding: 10,
  },

  mainText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#364471',
  },
  passengerText: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#364471',
  },
});
