import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Platform, KeyboardAvoidingView } from 'react-native'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase'
import { getDoc } from 'firebase/firestore/lite'
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Icon from '../Icon'
import uuid from 'react-native-uuid';
import { async } from '@firebase/util'
const MakeApp = ({ navigation, route }) => {
  const doctorID = route.params.doc_user_id
  const [currentUser, setCurrentUser] = useState('')
  const [payment, setPayment] = useState('')
  const [problem, setProblem] = useState('')
  const [doctor, setDoctor] = useState('')
  const [patient, setPatient] = useState('')
  useEffect(() => {
    onAuthStateChanged(authentication, async (user) => {
      if (user) {
        setCurrentUser(user.uid)
        // console.log(currentUser)
        const patientCollection = await getDoc(doc(db, 'patientList', user.uid))
                
                // const patientList = patientCollection.docs.map(doc => doc.data())
                // console.log(patientCollection.data())
                setPatient(patientCollection.data());


      } else {
        // console.log("no user available")
      }
    })
    const getDocData = async () => {
      const docData = await getDoc(doc(db, 'doctorList', doctorID))
     
      setDoctor(docData.data())
      
    }
    getDocData();

  })
  function addDays(n1,n2){
    return n1+n2;
  }
  function presssedOption() {
    console.log('Pressed')
  }
  // const doc_username = route.params?.doc_username
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Empty')
  const [dateText, setDateText] = useState('Day/Month/Year')
  const [timeText, setTimeText] = useState('24 Hours Format')
  const onChange = (event, selectedDate) => {
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




  const makeAppBtn = async () => {
    navigation.navigate('PatientHome')
    const uid = uuid.v4();
    await setDoc(doc(db, 'appointmentList', uid), {
      doc_document_id: doctorID,
      patient_document_id: currentUser,
      date: dateText,
      time: timeText,
      payment_method: payment,
      problem: problem,
      status: 'Unconfirmed', 
      doc_username: doctor.doc_username,
      patient_username: patient.patient_username,
      patient_num: patient.patient_num,
      doc_location: doctor.doc_location,
      app_id:  uid,
    })
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        
        <KeyboardAvoidingView>
          {/* <Text style={styles.label}>Speciality</Text>
          <TextInput placeholder='Catergory' style={styles.textInput} value={doctor.doc_speciality} editable={false}/> */}
          <Text style={styles.label}>Doctor Name</Text>
          <TextInput placeholder='Doctor' style={styles.textInput} value={doctor.doc_username} editable={false}/>
          {/* <Text style={styles.label}>Hospital Name</Text>
          <TextInput placeholder='Hospital' style={styles.textInput} value={doctor.doc_location} editable={false}/> */}
          {/* <Text>{doctor.doc_username}</Text> */}
          <Text style={styles.label}>Date</Text>
          <KeyboardAvoidingView style={styles.picker}>
            <Text style={styles.displayedText}>{dateText}</Text>
            <Pressable >
              <Text style={styles.pickButton} onPress={() => showMode('date')}>Select</Text>
            </Pressable>
          </KeyboardAvoidingView>
          <Text style={styles.label}>Time</Text>
          <KeyboardAvoidingView style={styles.picker}>
            <Text style={styles.displayedText}>{timeText}</Text>
            <Pressable >
              <Text style={styles.pickButton} onPress={() => showMode('time')}>Select</Text>
            </Pressable>
          </KeyboardAvoidingView>
          <Text style={styles.label}>Payment Method</Text>
          <TextInput placeholder='Ex: Cash' style={styles.textInput} onChangeText={(text) => setPayment(text)}/>
          <Text style={styles.label}>Your illness</Text>
          <TextInput multiline numberOfLines={4} maxLength={40} placeholder='Ex: Fever' style={styles.textInput} onChangeText={(text) => setProblem(text)}/>
        </KeyboardAvoidingView>
      
        {/* <Text style={styles.h1}>Doctor</Text> */}
        






        {show && (
        <RNDateTimePicker
        testID='dateTimePicker'
        value={date}
         mode={mode}
        is24Hour={false}
        display='default'
        onChange={onChange}
        minimumDate={new Date()}
        
        
        />
      )}




        <TouchableOpacity style={styles.buttonBoxContainer} onPress={makeAppBtn}>
          <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
          <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>




        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>




      </Pressable>
    </View>




  )
}




export default MakeApp








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
  label:{
    fontSize: 14,
    
},
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: "#AEBDCA",
    marginVertical: 8,
  },
  displayedText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 8
  },
  pickButton: {
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







