import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import Icon from '../Icon'
const HealthCheck = ({ navigation, route }) => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [bp, setBP] = useState('');
  const [temp, setTemp] = useState('');

  function checkHealthBtn() {
    console.log(age)
    
    if(age < 18){
      console.log('Under age')
    }
    else{
      console.log('Adult')
    }
  }
  
  function presssedOption() {
    console.log('Pressed')
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <Text style={styles.h1}>Check your health</Text>
        <View>
          <TextInput placeholder='Age' style={styles.textInput} onChangeText={(text) => setAge(text)} />
          <TextInput placeholder='Height' style={styles.textInput} onChangeText={(text) => setHeight(text)} />
          <TextInput placeholder='BP' style={styles.textInput} onChangeText={(text) => setBP(text)} />
          <TextInput placeholder='Temparature' style={styles.textInput} onChangeText={(text) => setTemp(text)} />
        </View>

        <TouchableOpacity style={styles.buttonBoxContainer} onPress={checkHealthBtn}>
          <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
          <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>

      <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="setting" onPress={() => navigation.navigate('Settings')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>

      </Pressable>
    </View>
  )
}

export default HealthCheck


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
    justifyContent: 'center',
    marginVertical: 23,
    marginHorizontal: 30,
  
  },
  h1: {
    fontSize: 30,

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,

  },
  buttonIcon: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white'
  },
  buttonBoxContainer: {
    backgroundColor: '#7895B2',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  optionIcon: {
    marginLeft: 5,
    fontSize: 30,
    color: '#7895B2',
  },
  footer: {
    position: 'absolute',
    // left: '45%',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginVertical: 12,
    width: '100%',
    backgroundColor: "white",
    justifyContent: 'space-around',
    padding: 5,
    height: '6%',
    borderTopColor: "#AEBDCA",
    borderTopWidth: 2
  },


})