import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image, fontWeight } from 'react-native'
import { ScrollView } from 'react-native'
import Icon from '../Icon'
const PatientHome = ({ navigation, route }) => {
  function presssedCategory() {
    console.log('Pressed')
  }

  function presssedOption() {
    console.log('Pressed')
  }

  function pressedDoctor() {
    console.log('Pressed')
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.searchBoxContainer}>
            <Icon style={styles.filterIcon} type="ant" name="search1" ></Icon>
            <TextInput placeholder='Search Doctors' />
          </View>

          <View style={styles.category}>
            <Text style={styles.title}>Category</Text>
            <Pressable onPress={presssedCategory}>
              <View style={styles.listCategories}>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('DoctorsList')}>Doctors List</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('DoctorsList')}>Make Appointment</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('HealthCheck')}>Health Checkup</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('Reminder')}>Reminder</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('HealthTips')}>Health Tips</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('Emergency')}>Emergency</Text>
              </View>
            </Pressable>

          </View>
          <View style={styles.appointments}>
            <Text style={styles.title}>Upcomming Appointments</Text>
            <TouchableOpacity style={styles.appointment} onPress={() => navigation.navigate('DocAppointmentInfo')}>
              <Text style={styles.tap}>Tap the card to see more details</Text>
              <View style={styles.appointmentDetails}>
                <Text style={styles.h2}>Fazle Rabbi Tuhin</Text>
                <View style={styles.date_time_status}>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="calendar" ></Icon>
                    <Text style={styles.date}>17-11-22</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="clockcircleo" ></Icon>
                    <Text style={styles.date}>12:00 PM</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="exclamationcircleo" ></Icon>
                    <Text style={styles.date}>Uncomfirmed</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="enviromento" ></Icon>
                    <Text style={styles.place}>Sylhet Medical College</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Reschedule</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="edit" ></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Cancel</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="closecircle" ></Icon>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.appointment} onPress={() => navigation.navigate('DocAppointmentInfo')}>
              <Text style={styles.tap}>Tap the card to see more details</Text>
              <View style={styles.appointmentDetails}>
                <Text style={styles.h2}>Fazle Rabbi Tuhin</Text>
                <View style={styles.date_time_status}>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="calendar" ></Icon>
                    <Text style={styles.date}>17-11-22</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="clockcircleo" ></Icon>
                    <Text style={styles.date}>12:00 PM</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="exclamationcircleo" ></Icon>
                    <Text style={styles.date}>Uncomfirmed</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="enviromento" ></Icon>
                    <Text style={styles.place}>Sylhet Medical College</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Reschedule</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="edit" ></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Cancel</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="closecircle" ></Icon>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.appointment} onPress={() => navigation.navigate('DocAppointmentInfo')}>
              <Text style={styles.tap}>Tap the card to see more details</Text>
              <View style={styles.appointmentDetails}>
                <Text style={styles.h2}>Fazle Rabbi Tuhin</Text>
                <View style={styles.date_time_status}>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="calendar" ></Icon>
                    <Text style={styles.date}>17-11-22</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="clockcircleo" ></Icon>
                    <Text style={styles.date}>12:00 PM</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="exclamationcircleo" ></Icon>
                    <Text style={styles.date}>Uncomfirmed</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon style={styles.infoIcon} type="ant" name="enviromento" ></Icon>
                    <Text style={styles.place}>Sylhet Medical College</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Reschedule</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="edit" ></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('')}>
                  <Text style={{ color: 'white', fontSize: 16, }}>Cancel</Text>
                  <Icon style={styles.buttonIcon} type="ant" name="closecircle" ></Icon>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
            
          </View>


        </ScrollView>

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

export default PatientHome

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
    marginVertical: 5,
    marginHorizontal: 15,
    height: '100%',
    marginBottom: '14%',
  },
  h1: {
    fontSize: 30,

  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  filterIcon: {
    marginRight: 5,
    fontSize: 20,
    color: '#7895B2',
    alignSelf: 'center'
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,
  },

  title: {
    fontSize: 20
  },
  category: {
    flex: 1,
    marginVertical: 5
  },
  listCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginVertical: 20,
    // marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'space-around',
    borderBottomColor: '#AEBDCA',
    borderBottomWidth: 1
  },
  listCategory: {
    backgroundColor: '#F5EFE6',
    // marginHorizontal: 5,
    marginVertical: 10,
    width: '45%',
    height: 40,
    textAlign: 'center',
    // padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,

  },

  appointments: {

  },

  appointmentDetails: {
    // backgroundColor: 'green',
    width: '90%',

  },
  opts: {
    // backgroundColor: 'red'
  },
  appointment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    paddingVertical: 6,
    alignContent: 'center',

  },
  tap: {
    fontSize: 16,
    backgroundColor: '#AEBDCA',
    width: '90%',
    textAlign: 'center',
    color: 'white',
    marginBottom: 3,
    paddingVertical: 5
  },
  actions: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    marginTop: 15
  },
  cancelButton: {

    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  buttonIcon: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white'
  },
  date_time_status: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  infoIcon: {
    marginRight: 5,
    fontSize: 20,
    // color: 'white'
  },
  date: {
    color: '#827D7D',
    fontWeight: 'bold',
  },
  time: {
    color: '#827D7D',
    fontWeight: 'bold',
  },
  status: {
    color: '#827D7D',
    fontWeight: 'bold',
  },
  place: {
    color: '#827D7D',
    fontWeight: 'bold',

  },
  opt: {
    textAlign: 'right'
  },
  cancel: {
    textAlign: 'right',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
  },
  edit: {
    textAlign: 'right',
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15
  },

  textBold: {
    fontWeight
  },
  optionIcon: {
    // marginLeft: 5,
    fontSize: 25,
    color: '#7895B2',
    // backgroundColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 6,
    alignSelf: 'center'
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
    justifyContent: 'space-evenly',
    padding: 5,
    height: '7%',
    borderTopColor: "#AEBDCA",
    borderTopWidth: 2,
    // backgroundColor: 'green'

  },
})