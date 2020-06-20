import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
// import {Navigation} from 'react-navigation';

export default function Screen2 ({navigation}) {
  
    return (
      
      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <View style={styles.circle}>
            <View style={styles.imgCover}> 
              <Image source={require('../assets/user.png')} style={styles.userImg}  />
              <Text style={styles.userName}>Hello Christian</Text>
             
            </View>
            
          </View>
        </View>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
    marginTop: 10,
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
    // marginLeft: 15,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    flex:1,

  },

  // userText:{
  //   marginLeft: 10,
  //   color: 'white',
  //   fontSize: 10,   
  // }

})