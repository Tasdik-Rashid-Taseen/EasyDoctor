import {React, useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase'
import Icon from '../Icon'

const PatientSignIn = ({ navigation, route }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((patientCredential) =>  {
            console.log('Signed In')
            const user = patientCredential.user
            console.log(user)
            navigation.navigate('PatientHome')
        }) 
        .catch(error => {
            
            if(error.code === 'auth/invalid-email'){
                console.log('This email address is invalid!')
                Alert.alert('This email address is invalid!')

            }
            if(error.code === 'auth/user-not-found'){
                console.log('Not a registered email! Please create an account.')
                Alert.alert('Not a registered email! Please create an account.')

            }
            if(error.code === 'auth/wrong-password'){
                console.log('Wrong Password!')
                Alert.alert('Wrong Password!')
            }
            console.error(error)
            console.log(error)
        }
           
            )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Patient Sign In</Text>
            <View>
            <KeyboardAvoidingView>        
                    <TextInput placeholder='Email'  onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                    <TextInput placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry style={styles.textInput} />
            </KeyboardAvoidingView>
            </View>

            <TouchableOpacity style={styles.buttonBoxContainer} onPress={handleSignIn}>
                <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
            </TouchableOpacity>
            <View style={styles.SignUpMessage}>
                <Text style={{color: 'blue', fontSize: 17}}
                    onPress={() => navigation.navigate('DocSignUp')}>Don't have an account? Sign Up
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
