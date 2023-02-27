import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Alert, KeyboardAvoidingView } from 'react-native'
import Icon from '../Icon'
const HealthCheck = ({ navigation, route }) => {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')

  const [height, setHeight] = useState('')
  const [upperBP, setUpperBP] = useState('')
  const [lowerBP, setLowerBP] = useState('')
  const [temp, setTem] = useState('')
  function presssedOption() {
    console.log('Pressed')
  }




  function onConfirm() {
    
    const bmi = weight / (height * height);
    let bmiCondition = 'Normal weight';
    
    if (bmi < 18.5) bmiCondition = "Under weight";
    else if (bmi > 25.5) bmiCondition = "Over weight";
    let bpConditon;
    if (lowerBP <= 70 || upperBP <= 110) bpConditon = 'Low blood pressure';
    else if (lowerBP >= 90 || upperBP >= 130) bpConditon = 'High blood pressure'
    let temCondition;
    if(temp>98.5){
      if(temp>=103){
        temCondition = "High Fever"
      }
      else{
        temCondition = "Fever"
      }
    }
    else{
      temCondition = "Normal"
    }
    Alert.alert('BMI: ' + bmiCondition + '\tBP condition: ' + bpConditon + '\tTempareture: ' + temCondition)
  }


  function presssedOption() {
    console.log('Pressed')
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <Text style={styles.h1}>Start General Test!</Text>
        <View>
          <KeyboardAvoidingView>
            <TextInput placeholder='Age' style={styles.textInput} onChangeText={(text) => setAge(text)} />
            <TextInput placeholder='Weight in KG' style={styles.textInput} onChangeText={(text) => setWeight(text)} />
            <TextInput placeholder='Height in meters ex. 1.73' style={styles.textInput} onChangeText={(text) => setHeight(text)} />
            <TextInput placeholder='BP High ex. 120' style={styles.textInput} onChangeText={(text) => setUpperBP(text)} />
            <TextInput placeholder='BP Low ex. 80' style={styles.textInput} onChangeText={(text) => setLowerBP(text)} />
            <TextInput placeholder='Temparature in F' style={styles.textInput} onChangeText={(text) => setTem(text)} />
          </KeyboardAvoidingView>


        </View>
        <TouchableOpacity style={styles.buttonBoxContainer} onPress={onConfirm}>
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