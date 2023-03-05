import { React, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'

import Icon from '../Icon'



const AdminSignIn = ({ navigation, route }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [currentUser, setCurrentUser] = useState('')
    useEffect(() => {
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setCurrentUser(user)
                // console.log(user.uid)
            } else {

            }
        })
    })

    const handleDocSignIn = () => {
        if (email == "admin@gmail.com") {
            if (password == 12345678) {
               
                navigation.navigate('AdminHome')
            }
        }
        else {
            console.log("Wrong credentials")
        }



    }




    return (
        <View style={styles.container}>

            <Text style={styles.h1}>Admin Sign In</Text>
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
        </View>
    )
}

export default AdminSignIn

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
