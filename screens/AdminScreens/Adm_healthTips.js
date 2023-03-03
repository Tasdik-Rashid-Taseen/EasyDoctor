import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image, fontWeight, RefreshControl, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc, QuerySnapshot, getDoc } from 'firebase/firestore/lite'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import { where } from 'firebase/firestore/lite'
import firebaseConfig from '../../firebase'
import Icon from '../Icon'
import uuid from 'react-native-uuid';
const Adm_HealthTips = ({ navigation, route }) => {
  const [tipTitle, setTipTitle] = useState('')
  const [tipDetails, setTipDetails] = useState('')
  useEffect(() => {


  }, [])
  const createTips = async () => {
    navigation.navigate('AdminHome')
    await setDoc(doc(db, 'healthTips', uuid.v4()), {
      title: tipTitle,
      details: tipDetails
    })
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={styles.label}>Title</Text>
          <TextInput placeholder='Title' onChangeText={(text) => setTipTitle(text)} style={styles.textInput} />
          <Text style={styles.label}>Details</Text>
          <TextInput multiline numberOfLines={8} maxLength={400}placeholder='Details' onChangeText={text => setTipDetails(text)} secureTextEntry style={styles.textInput} />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.buttonBoxContainer} onPress={createTips}>
          <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
          <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.footer} >
        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('AdminHome')}></Icon>   
      </Pressable>
    </View>



  )
}

export default Adm_HealthTips

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
  buttonIcon: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white'
  },
  h1: {
    fontSize: 30,

  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,
  },
  h3: {
    fontSize: 17,
    fontWeight: 'bold',
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