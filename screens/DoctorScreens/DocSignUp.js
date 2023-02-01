import { React, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native'
import {  createUserWithEmailAndPassword } from 'firebase/auth'
// import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebase'
import Icon from '../Icon'
import { authentication } from '../../firebase'
import SignUp1 from '../CommonScreens/SignUp1'
import { db } from '../../firebase'
import {collection, getDocs, doc, setDoc} from 'firebase/firestore/lite'
const DocSignUp = ({ navigation, route }) => {
    // const { role } = route.params;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const app = initializeApp(firebaseConfig)
    // const auth = getAuth(app)

    const handleDocSignUp = async() => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((docCredential) => {
                console.log('Account Created')

                const user = docCredential.user
                console.log(user)
                navigation.navigate('DocHome')
            },
            await setDoc(doc(db, 'doctorList', 'Random_doc'), {
                doc_name: 'Jelly',
                doc_gender: 'Female'
            }))
            .catch(error => {
                Alert.alert(error.message)
                console.log(error)
            }

            )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Doctor</Text>
            {/* <View>
                <TextInput placeholder='Username' style={styles.textInput} />
                <TextInput placeholder='Email' style={styles.textInput} />
                <TextInput placeholder='Number' style={styles.textInput} />
                <TextInput placeholder='Speciality' style={styles.textInput} />
                <TextInput placeholder='Dictor Licence Number' style={styles.textInput} />
                <TextInput placeholder='Password' style={styles.textInput} />
                <TextInput placeholder='Confirm Password' style={styles.textInput} />
            </View> */}


            <KeyboardAvoidingView>
                <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
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
        </View>
    )
}

export default DocSignUp

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
    SignInMessage: {
        flexDirection: 'row',
        marginVertical: 12,
        alignSelf: 'center'
    }
})

