import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView, Pressable, Image, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import firebaseConfig from '../../firebase'
import Icon from '../Icon'
import { authentication } from '../../firebase'
import SignUp1 from '../CommonScreens/SignUp1'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc, QuerySnapshot, getDoc } from 'firebase/firestore/lite'
import { async } from '@firebase/util';


const DoctorsList = ({ navigation, route }) => {
  function presssedCategory() {
    console.log('Pressed')
  }

  function presssedOption() {
    console.log('Pressed')
  }




  const [users, setUsers] = useState([])



  useEffect(() => {


    const getDocInfo = async () => {
      const doctorCollection = collection(db, 'doctorList')
      const doctorSnapshot = await getDocs(doctorCollection)
      setUsers(doctorSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }

      )))

    }

    getDocInfo();

  }, [])

  // for(let i=0; i<users.length; i++){
  //   console.log(users[i])
  // }

  // const clickedMakeApp = () => {



  // }
  const getDocInfo = async () => {
    const doctorCollection = collection(db, 'doctorList')
    const doctorSnapshot = await getDocs(doctorCollection)
    setUsers(doctorSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }

    )))

  }
  const [refresh, setRefresh] = useState(false)
  const pullMe = () => {
    getDocInfo();
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
    }, 4000)
  }
  return (



    <View style={styles.contents}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }>
          <View style={styles.searchBoxContainer}>
            <Icon style={styles.filterIcon} type="ant" name="search1" ></Icon>
            <TextInput placeholder='Search Doctors' />
          </View>
          


          {/* Experiment */}
          <View style={styles.doctor}>
            <Text style={styles.title}>Suggested Doctors</Text>
            <View style={styles.docContents}>


              {
                users.map((user) => {
                  console.log(user.doc_id)
                  return user.status == "approved" ?(
                    <View key={user.id} >

                      {/* <Text>Name: {user.doc_username}</Text>
            <Text>Speciality: {user.doc_speciality}</Text> */}
                      <View style={styles.doctor}>
                        <Pressable style={styles.listDoctors} >
                          <TouchableOpacity style={styles.listDoctor}>
                            <View style={styles.demo}>
                            <Image style={styles.docImageS} source={require('../images/doctors/user-avatar.png')}></Image>
                            <View style={styles.docInfo} >
                              <Text style={styles.textBold}>{user.doc_username}</Text>
                              <Text style={styles.textThin}>{user.doc_speciality}</Text>
                              <Text style={styles.textThin}>{user.doc_location}</Text>
                            </View>
                            </View>
                            
                            <Text style={styles.book} onPress={() => {
                              navigation.navigate('MakeApp', {
                                doc_user_id: user.doc_id,
                              })
                            }}>Book Appontment</Text>
                          </TouchableOpacity>
                        </Pressable>
                      </View>
                    </View>
                  )
                  :
                  console.log("No other thing to show")
                })
              }
            </View>

          </View>

        </ScrollView>

      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>

        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>

      </Pressable>

    </View>

  )
}

export default DoctorsList


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

  docContents: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    width: '100%',
    // backgroundColor: "red",
    justifyContent: 'space-around'
  },
  doctor: {
    flex: 1,

  },

  demo:{
    flexDirection: 'row',
    marginBottom: 10,
    width: '80%'
  },

  listDoctors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 2,
    width: '100%',
    // backgroundColor: "red",
    justifyContent: 'space-around'
  },
  listDoctor: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    marginVertical: 10,
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#AEBDCA",
  },
  docImageS: {
    width: 150,
    height: 130,
    padding: 5,


  },
  docInfo: {
    textAlign: 'left',
    padding: 5
  },
  book: {
    backgroundColor: '#7895B2',
    alignItems: 'center',
    textAlign: 'center',
    width: "90%",
    padding: 6,
    color: 'white'

    // justifyContent: 'center',
    // alignSelf: 'center'
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