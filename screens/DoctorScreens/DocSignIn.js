import { React, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import { db } from '../../firebase'

import Icon from '../Icon'
import { async } from '@firebase/util'
import { collection, getDoc, doc } from 'firebase/firestore/lite'


const DocSignIn = ({ navigation, route }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    useEffect(()=> {
        onAuthStateChanged(authentication, (user) => {
            if(user) {
                setCurrentUser(user)
                // console.log(user.uid)
            }else {
            
            }
        })
    })

    const handleDocSignIn =  () => {
            
            signInWithEmailAndPassword(authentication, email, password)
            .then(async (result) => {
                const docData = await getDoc(doc(db, 'doctorList', result.user.uid))
               
                if(docData.data().status == "unconfirmed"){
                    Alert.alert("Wait for admin to approve your account")
                }
                if(docData.data().status == "approved"){
                    if(docData.data().role == 'Doctor'){
                        navigation.navigate('DocHome')
                        console.log(docData.data())
                    } 
                }
                
               
            },
                )
            .catch(error => {
                Alert.alert(error.message)
                console.log(error)
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
        
            <Text style={styles.h1}>Doctor Sign In</Text>
            <View>
                <KeyboardAvoidingView>
                    <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                    <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
                </KeyboardAvoidingView>
            </View>
            {/* <Button title='Get Data' onPress={addData}></Button> */}
     
                <TouchableOpacity style={styles.buttonBoxContainer} onPress={handleDocSignIn}>
                    <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
                </TouchableOpacity>


            <View style={styles.SignUpMessage}>
                <Text style={{ color: 'blue', fontSize: 17 }}
                    onPress={() => navigation.navigate('DocSignUp')}>Don't have an account? Sign Up
                </Text>
            </View>
        </View>
    )
}

export default DocSignIn

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
