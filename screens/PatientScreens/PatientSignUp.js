import {React, useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import {initializeApp} from 'firebase/app'


import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
// import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebase'
import Icon from '../Icon'
import { authentication } from '../../firebase'
import SignUp1 from '../CommonScreens/SignUp1'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite'
import { async } from '@firebase/util';

    


const PatientSignUp = ({ navigation, route }) => {
    const [userName, setUserName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [nidNum, setNidNum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const app = initializeApp(firebaseConfig)
    // const auth = getAuth(app)
    const [currentUser, setCurrentUser] = useState('')
    useEffect(()=> {
        onAuthStateChanged(authentication, (user) => {
            if(user) {
                setCurrentUser(user)
                // console.log(user.uid)
            }else {
                console.log("no user available")
            }
        })
    })

    const handlePatientSignUp =  () => {
        if(password === confirmPassword){
            createUserWithEmailAndPassword(authentication, email, password)
            .then(async (result) => {
                console.log('Account Created')
                navigation.navigate('PatientHome')
                await setDoc(doc(db, 'patientList', result.user.uid), {
                    patient_username: userName,
                    patient_gender: gender,
                    patient_email: email,
                    patient_num: number,
                    patient_nidNum: nidNum,
                    role: 'Patient'
                })
            },
                )
            .catch(error => {
                Alert.alert(error.message)
                console.log(error)
            }

            )
        }else{
            Alert.alert("Password doesn't match")
        }
        
    }


    return (
        <View style={styles.container}>
            {/* <Text style={styles.h1}>Doctor</Text> */}
            <ScrollView>
               

                <KeyboardAvoidingView>
                   



                    <Text style={styles.label}>Username</Text>
                    <TextInput placeholder='Username' onChangeText={(text) => setUserName(text)} style={styles.textInput} />
                    <Text style={styles.label}>Gender</Text>
                    <TextInput placeholder='Gender' onChangeText={(text) => setGender(text)} style={styles.textInput} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                    <Text style={styles.label}>Number</Text>
                    <TextInput placeholder='Number' onChangeText={(text) => setNumber(text)} style={styles.textInput} />
                    <Text style={styles.label}>NID Number</Text>
                    <TextInput placeholder='Licence Number' onChangeText={(text) => setNidNum(text)} style={styles.textInput} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput placeholder='Password' onChangeText={text => setConfirmPassword(text)} secureTextEntry style={styles.textInput} />

                </KeyboardAvoidingView>


                <TouchableOpacity style={styles.buttonBoxContainer} onPress={handlePatientSignUp}>
                    <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
                </TouchableOpacity>
                <View style={styles.SignInMessage}>
                    {/* <Text style={{ fontSize: 16 }}></Text> */}
                    <Text style={{ color: 'blue', fontSize: 17 }}
                        onPress={() => navigation.navigate('PatientSignIn')}>Already have an account? Sign In
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default PatientSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 23,
        marginHorizontal: 30,
    },
    h1: {
        fontSize: 30,

    },
    inputIcon: {
        marginRight: 5,
        fontSize: 22
    },
    buttonIcon: {
        marginLeft: 5,
        fontSize: 20,
        color: 'white'
    },
    inputBoxContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#AEBDCA",
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,
    },
    buttonBoxContainer: {
        backgroundColor: '#698269',
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
    textInput: {
        borderWidth: 1,
        borderColor: "#AEBDCA",
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,

    },
    SignInMessage: {
        flexDirection: 'row',
        marginVertical: 12,
        alignSelf: 'center'
    }
})

