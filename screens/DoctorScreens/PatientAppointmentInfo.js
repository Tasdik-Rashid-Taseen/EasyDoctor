import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, ScrollView, Systrace } from 'react-native'
import Icon from '../Icon'
const PatientAppoinmentInfo = ({ navigation, route }) => {
  function presssedOption() {
    console.log('Pressed')
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>

        <ScrollView >
          <Text style={styles.title}>Patient Appointment Info</Text>
          <View style={styles.appoinments}>
            <View style={styles.appointmentDetails}>
              <Text style={styles.h2}>Fazle Rabbi Tuhin</Text>
              <View style={styles.date_time}>
                <Text style={styles.date}>17-11-22</Text>
                <Text style={styles.time}>12:00 PM</Text>
              </View>
              <Text style={styles.place}>Sylhet Medical College</Text>
              <Text style={styles.h3}>Appointment Type: Normal</Text>
              <Text style={styles.h3}>Problem: Lorem ipsum dolor sit amet, conser adipisci elit. In consectetur justo sed efficitur ullamcorper. Curabitur id auctor mauris, iscing elit. In consectetur </Text>

            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('')}>
                <Text style={{color:'white', fontSize: 16,}}>Confirm</Text>
                <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('')}>
                <Text style={{color:'white', fontSize: 16,}}>Reschedule</Text>
                <Icon style={styles.buttonIcon} type="ant" name="edit" ></Icon>
              </TouchableOpacity>
            </View>
          </View>
          

        </ScrollView>


      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>

        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('DocHome')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="setting" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" ></Icon>

      </Pressable>
    </View>
  )
}

export default PatientAppoinmentInfo


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
  title: {
    fontSize: 20
},
  h1: {
    fontSize: 30,

  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold'
},
h3: {
    fontSize: 17,
    fontWeight: 'semi-bold'
},
  textInput: {
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,

  },
  appoinments:{
    borderWidth: 1,
    borderColor: "#AEBDCA",
    padding: 10
  },

  appointmentDetails: {
    // backgroundColor: 'green',
    width: '100%',

  },
  opts: {
    // backgroundColor: 'red'
  },
  appointment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    width: '100%',
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    paddingVertical: 6,
    alignContent: 'center',

  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 7
  },
  confirmButton: {

    flexDirection: 'row',
    backgroundColor: 'green',
    paddingVertical:6,
    paddingHorizontal: 10 
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    paddingVertical:6,
    paddingHorizontal: 10 
  },

  date_time: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  date: {
    marginRight: 8,
    color: '#827D7D',
    fontWeight: 'bold',
    fontSize: 17,
  },
  time: {
    color: '#827D7D',
    fontWeight: 'bold',
    fontSize: 17,
  },
  place: {
    color: '#827D7D',
    fontWeight: 'bold',
    fontSize: 17,
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