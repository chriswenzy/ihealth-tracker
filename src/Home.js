import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import {Navigation} from 'react-navigation';

export default function Screen2 ({navigation}) {
  
    return (
      
  <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle}>
            <View style={styles.imgCover}> 
              <Image source={require('../assets/user.png')} style={styles.userImg}  />

             <View> 
               <Text style={styles.userName}>Hello Christian</Text>
            </View>
         
            </View>
          </View>
        </View>

        <View>

            <View style={styles.btnContainer}>
                <Text
                style={styles.btnText}
                onPress={() => {
                  this.props.navigation.navigate('#');
                }}>
                ADD NEW EVENT
              </Text>
            </View>

        </View>

              <View> 
                <Calendar
              
                    style={[styles.calendar]}dayComponent={({date, state}) => {
                    return (
                    <View>
                    <Text style={{textAlign: 'center', color: state === 'disabled' ?                        'gray' : 'black'}}>
                    {date.day}
                    </Text>
                  </View>
                );
              }}
            />
            </View>
  </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },


  header:{
    height: 150,
    width: '100%',
    backgroundColor: '#364471',
    borderBottomRightRadius: 150,
  },
  circle:{
    width: 60,
    height: 60,
    borderRadius: 100/2,
    backgroundColor: 'white',
    marginTop: 40,
    marginLeft:10,
  },
  userImg:{
    width: 60,
    height: 60,
  },
  imgCover:{
    flexDirection: "row",
    width: '100%',  
  },

  userName:{
    marginLeft: 35,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
    flexDirection: "column",
    marginTop:18,

  },

  calendar: {
    width:400,
    height: 400,
    margin: 20,

  },

  btnContainer: {
    // flex:1,
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
    // height: 200,
    marginTop:10,  
  },

  btnText:{
    color: 'white',
    fontSize: 18,
    width: 200,
    textAlign: "center",
  }

})