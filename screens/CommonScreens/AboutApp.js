import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from '../Icon'
const AboutApp = ({ navigation }) => {

  return (
    <View style={styles.contents}>
      <View style={styles.container}>
      <Text style={styles.h1}>Easy Doctor</Text>
        <Text style={styles.p}>The Easy Doctor App is a software application that is especially meant to help patients manage and schedule appointments with the doctor's .The purpose of developing this to get doctor appointments directly accessed by the doctor. Where there is no waiting time issues. As we all know how hard to get a very well consultant appointment through their agents. Apart from this it is so time consuming and hassled. This app can make patient to get the appointment easily on the available schedule. A patient can find his specialist according to his/her sickness. As a result this is less time consuming and get easily update of rescheduled /cancelation. People of all area can able to get good health care and live a healthy life to get in touch with the specialize consultant. </Text>
      </View>
      
    </View>
  )
}
export default AboutApp




const styles = StyleSheet.create({
  contents: {
    flex: 1,
    justifyContent: 'center',
    // marginVertical: 23,
    // marginHorizontal: 20,
    height: '100%',

},
container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 23,
    marginHorizontal: 30,
},
h1: {
    fontSize: 24,
textAlign: 'center',
color: "#E96479",
fontWeight: 'bold'
},
p: {
    fontSize: 16,
    
  },
  buttonIcon: {
    marginLeft: 5,
    fontSize: 22,
    color: 'white'
  },
  buttonBoxContainer: {
    backgroundColor: '#E96479',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "40%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,
    justifyContent: 'center'
  },
  moto: {
    width: '50%',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
