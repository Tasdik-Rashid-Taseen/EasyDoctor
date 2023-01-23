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
                <Text style={styles.listCategory} onPress={() => navigation.navigate('BookApp')}>Book Appointment</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('HealthCheck')}>Health Checkup</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('Reminder')}>Reminder</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('HealthTips')}>Health Tips</Text>
                <Text style={styles.listCategory} onPress={() => navigation.navigate('Emergency')}>Emergency</Text>
              </View>
            </Pressable>

          </View>
          <View style={styles.doctor}>
            <Text style={styles.title}>Suggested Doctors</Text>
            <Pressable style={styles.listDoctors} onPress={pressedDoctor}>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc1.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc2.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc3.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 5</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc4.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc5.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc6.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.9</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc7.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.9</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc8.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.8</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc9.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.8</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc10.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.8</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc11.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.8</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc12.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.7</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc13.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.7</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                <Image style={styles.docImageS} source={require('../images/doctors/doc14.jpg')}></Image>
                <View style={styles.docInfo}>
                  <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                  <Text style={styles.textThin}>Medicine & Cardiology</Text>
                  <Text>Ratings: 4.7</Text>
                </View>
              </TouchableOpacity>

            </Pressable>
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
  doctor: {
    flex: 1,

  },
  listDoctors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    width: '100%',
    // backgroundColor: "red",
    justifyContent: 'space-around'
  },
  listDoctor: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    marginVertical: 10,
    width: '48%',
    height: 220,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    justifyContent: 'center',
    alignItems: 'center'
  },
  docImageS: {
    width: 130,
    height: 130,
    padding: 5,
  },
  docInfo: {
    textAlign: 'left',
    padding: 5
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