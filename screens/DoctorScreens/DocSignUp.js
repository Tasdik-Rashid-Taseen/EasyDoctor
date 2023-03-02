import { React, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import { Form, FormItem } from 'react-native-form-component';
import Label from 'react-native-form-component';
// import { Label } from 'react-native-form-component';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
// import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebase'
import Icon from '../Icon'
import { authentication } from '../../firebase'
import SignUp1 from '../CommonScreens/SignUp1'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite'
import { async } from '@firebase/util';





import SelectDropdown from 'react-native-select-dropdown'

const selGender = ["Male", "Female", "Others"]












const DocSignUp = ({ navigation, route }) => {
    // const { role } = route.params;
    const [userName, setUserName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [location, setLocation] = useState('')
    const [licenceNum, setLicenceNum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const app = initializeApp(firebaseConfig)
    // const auth = getAuth(app)
    const [currentUser, setCurrentUser] = useState('')
    useEffect(()=> {
        onAuthStateChanged(authentication, (user) => {
            if(user) {
                setCurrentUser(user.uid)
                // console.log(user.uid)
            }else {
                // console.log("no user available")
            }
        })
    })

    const handleDocSignUp =  () => {
        if(password === confirmPassword){
            createUserWithEmailAndPassword(authentication, email, password)
            .then(async (result) => {
                console.log('Account Created')
                Alert.alert("Wait for the admin to approve your account")
                navigation.navigate('SignUp1')
                await setDoc(doc(db, 'doctorList', result.user.uid), {          
                    doc_username: userName,
                    doc_gender: gender,
                    doc_email: email,
                    doc_num: number,
                    doc_speciality: speciality,
                    doc_licenceNum: licenceNum,
                    doc_location: location,
                    doc_id: result.user.uid,
                    role: 'Doctor',
                    status: 'unconfirmed',
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
            <ScrollView showsVerticalScrollIndicator={false}>
               

                <KeyboardAvoidingView>
                   



                    <Text style={styles.label}>Username</Text>
                    <TextInput placeholder='Username' onChangeText={(text) => setUserName(text)} style={styles.textInput} />
                    <Text style={styles.label}>Gender</Text>
                    <TextInput placeholder='Gender' onChangeText={(text) => setGender(text)} style={styles.textInput} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                    <Text style={styles.label}>Number</Text>
                    <TextInput placeholder='Number' onChangeText={(text) => setNumber(text)} style={styles.textInput} />
                    <Text style={styles.label}>Speciality</Text>
                    <TextInput placeholder='Speciality' onChangeText={(text) => setSpeciality(text)} style={styles.textInput} />
                    <Text style={styles.label}>Location</Text>
                    <TextInput placeholder='Location' onChangeText={(text) => setLocation(text)} style={styles.textInput} />
                    <Text style={styles.label}>Licence Number</Text>
                    <TextInput placeholder='Licence Number' onChangeText={(text) => setLicenceNum(text)} style={styles.textInput} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput placeholder='Password' onChangeText={text => setConfirmPassword(text)} secureTextEntry style={styles.textInput} />
                   
        
                </KeyboardAvoidingView>


                <TouchableOpacity style={styles.buttonBoxContainer} onPress={handleDocSignUp}>
                    <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
                </TouchableOpacity>
                <View style={styles.SignInMessage}>
                    {/* <Text style={{ fontSize: 16 }}></Text> */}
                    <Text style={{ color: 'blue', fontSize: 17 }}
                        onPress={() => navigation.navigate('DocSignIn')}>Already have an account? Sign In
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default DocSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 30,
        height: '100%',
        // backgroundColor: 'red',
        // alignItems: 'center'
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
    label:{
        fontSize: 14,
        
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

