import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import Icon from '../Icon'

const PatientSignIn = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign In</Text>
            <View>
                <View style={styles.inputBoxContainer}>
                    <Icon style={styles.inputIcon} type="ionicon" name="person-circle-outline"></Icon>
                    <TextInput placeholder='Username' style={styles.textInput} />
                </View>
                <View style={styles.inputBoxContainer}>
                    <Icon style={styles.inputIcon} type="ionicon" name="key-outline"></Icon>
                    <TextInput placeholder='Password' style={styles.textInput} />
                </View>
                <Text style={{textAlign: 'right', color: '#017AFF', fontSize: 16}}>Forgot Password?</Text>
            </View>

            <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('PatientHome')}>
                <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
            </TouchableOpacity>
            <View style={styles.SignUpMessage}>
                <Text style={{color: 'blue', fontSize: 17}}
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
        color: '#7895B2',
        fontWeight: 'bold'
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


    },
    SignUpMessage: {
        flexDirection: 'row',
        marginVertical: 12,
        alignSelf: 'center'
    },

})
