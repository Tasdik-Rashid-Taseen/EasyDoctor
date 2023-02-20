import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Platform } from 'react-native'
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Icon from '../Icon'
const BookApp = ({ navigation, route }) => {
  function presssedOption() {
    console.log('Pressed')
  }
  // const doc_username = route.params?.doc_username
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText]= useState('Empty')
  const [dateText, setDateText] = useState('Day/Month/Year')
  const [timeText, setTimeText] = useState('24 Hours Format')
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false)
    setDate(currentDate)

    let temDate = new Date(currentDate)
    let fDate = temDate.getDate() + '/' + (temDate.getMonth() + 1) + '/' + temDate.getFullYear();
    let fTime = 'Hours ' + temDate.getHours() + ' | Minutes ' + temDate.getMinutes();
    setText(fDate + '\n' + fTime)
    setDateText(fDate)
    setTimeText(fTime)
    console.log(fDate + '\n' + fTime)
  }
  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        {/* <Text style={styles.h1}>Doctor</Text> */}
        <View>
          <TextInput placeholder='Catergory' style={styles.textInput} />
          <TextInput placeholder='Doctor' style={styles.textInput}/>
          <View style={styles.picker}>
            <Text style={styles.displayedText}>{dateText}</Text>
            <Pressable >
              <Text style={styles.pickButton} onPress={()=> showMode('date')}>Date</Text>
            </Pressable>
          </View>
          <View style={styles.picker}>
            <Text style={styles.displayedText}>{timeText}</Text>
            <Pressable >
              <Text style={styles.pickButton} onPress={()=> showMode('time')}>Time</Text>
            </Pressable>
          </View>
          <TextInput placeholder='Payment mathod' style={styles.textInput} />
          <TextInput multiline numberOfLines={4} maxLength={40} placeholder='Write your problem' style={styles.textInput} />
        </View>

     
      {show && (
        <RNDateTimePicker 
        testID='dateTimePicker'
        value={date}
         mode={mode}
        is24Hour={false}
        // display='default'
        onChange={onChange}
        />
      )}

        <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('PatientHome')}>
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

export default BookApp


const styles = StyleSheet.create({
  contents: {
    flex: 1,
    justifyContent: 'center',
    // marginVertical: 23,
    // marginHorizontal: 20,
    height: '100%',

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
  picker:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10, 
    borderWidth: 1,
    borderColor: "#AEBDCA",
    marginVertical: 8,
  },
  displayedText:{
    fontSize: 14,
    color: 'black',
    marginLeft: 8
  },
  pickButton:{
    backgroundColor: '#7895B2',
    // height: 30,
    color: 'white',
    fontSize: 15,
    paddingVertical: 3
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