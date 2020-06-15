import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'



export default function Initialising({navigation}) {
    return (
      <View style={styles.container}>
        <Text 
        style={styles.welcome} 
        onPress={()=>{ 
        navigation.navigate('Screen2')}}
        >Loading</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})