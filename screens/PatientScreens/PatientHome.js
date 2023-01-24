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
        <ScrollView>
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
          <Text style={styles.title}>Appointments</Text>
                    <View style={styles.reminders}>
                        <View style={styles.reminder}>
                            <Text style={styles.h3}>Fazle Rabbi Tuhin</Text>
                            <View style={styles.date_time}>
                                <Text style={styles.date}>17-11-22</Text>
                                <Text style={styles.time}>12:00 PM</Text>
                            </View>
                            <Text style={styles.place}>Sylhet Medical College</Text>
                        </View>
                        <View style={styles.opts}>
                            <Icon style={styles.cancelButton} type="ant" name="closecircle" ></Icon>
                            <Icon style={styles.editlButton} type="ant" name="edit" ></Icon>
                        </View>
                    </View>

                    <View style={styles.reminders}>
                        <View style={styles.reminder}>
                            <Text style={styles.h3}>Fazle Rabbi Tuhin</Text>
                            <View style={styles.date_time}>
                                <Text style={styles.date}>17-11-22</Text>
                                <Text style={styles.time}>12:00 PM</Text>
                            </View>
                            <Text style={styles.place}>Sylhet Medical College</Text>
                        </View>
                        <View style={styles.opts}>
                            <Icon style={styles.cancelButton} type="ant" name="closecircle" ></Icon>
                            <Icon style={styles.editlButton} type="ant" name="edit" ></Icon>
                        </View>
                    </View>

                    <View style={styles.reminders}>
                        <View style={styles.reminder}>
                            <Text style={styles.h3}>Fazle Rabbi Tuhin</Text>
                            <View style={styles.date_time}>
                                <Text style={styles.date}>17-11-22</Text>
                                <Text style={styles.time}>12:00 PM</Text>
                            </View>
                            <Text style={styles.place}>Sylhet Medical College</Text>
                        </View>
                        <View style={styles.opts}>
                            <Icon style={styles.cancelButton} type="ant" name="closecircle" ></Icon>
                            <Icon style={styles.editlButton} type="ant" name="edit" ></Icon>
                        </View>
                    </View>
        </ScrollView>

      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>

        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="setting" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" ></Icon>

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

  reminder: {
    // backgroundColor: 'green',
    width: '70%'
},
opts: {
    // backgroundColor: 'red'
},
reminders: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    paddingVertical: 6
},
cancelButton: {
    marginBottom: 20,
    fontSize: 20,
    color: 'red'
},
editlButton: {
    // margin: 5,
    fontSize: 20,
    color: 'orange'
},

date_time: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5
},
date: {
    marginRight: 8,
    color: '#827D7D',
    fontWeight: 'bold',
},
time: {
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