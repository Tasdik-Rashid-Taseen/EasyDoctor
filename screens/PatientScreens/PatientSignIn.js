import { React, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import { db } from '../../firebase'

import Icon from '../Icon'
import { async } from '@firebase/util'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite'

const PatientSignIn = ({ navigation, route }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    useEffect(() => {
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                // console.log("no user available")
            }
        })
    })

    const handlePatientSignIn = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then(async (result) => {

                const patientCollection = await getDoc(doc(db, 'patientList', result.user.uid))


                if (patientCollection.data().role == 'Patient') {
                    navigation.navigate('PatientHome')
                    console.log(patientCollection.data())
                }
                else {
                    console.log("Wrong credentials")
                }
                console.log("Signed in")
                // navigation.navigate('PatientHome')
            },
            )
            .catch(error => {
                Alert.alert(error.message)
                // console.log(error)
            }

            )


    }



    // const handleDocSignIn = async() => {
    //     signInWithEmailAndPassword(authentication, email, password)
    //         .then((docCredential) => {
    //             console.log('Signed In')
    //             const user = docCredential.user
    //             console.log(user)
    //             // setIsSignedIn(true)

    //             navigation.navigate('DocHome')
    //         })
    //         .catch(error => {
    //             Alert.alert(error.message)
    //             console.log(error)
    //         }
    //         )
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Patient Sign In</Text>
            <View>
                <KeyboardAvoidingView>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
                </KeyboardAvoidingView>
            </View>
            {/* <Button title='Get Data' onPress={addData}></Button> */}

            <TouchableOpacity style={styles.buttonBoxContainer} onPress={handlePatientSignIn}>
                <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
            </TouchableOpacity>


            <View style={styles.SignUpMessage}>
                <Text style={{ color: 'blue', fontSize: 17 }}
                    onPress={() => navigation.navigate('PatientSignUp')}>Don't have an account? Sign Up
                </Text>
            </View>
        </View>
    )
}

export default PatientSignIn

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
    buttonIcon: {
        marginLeft: 5,
        fontSize: 20,
        color: 'white'
    },
    label: {
        fontSize: 14,

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
    SignUpMessage: {
        flexDirection: 'row',
        marginVertical: 12,
        alignSelf: 'center'
    },

})
