import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import Icon from '../Icon'
const PatientSignUp = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>SIGN UP</Text>
            <View>
                <TextInput placeholder='First Name' style={styles.textInput} />
                <TextInput placeholder='Last Name' style={styles.textInput} />
                <TextInput placeholder='Username' style={styles.textInput} />
                <TextInput placeholder='Mail' style={styles.textInput} />
                <TextInput placeholder='Number' style={styles.textInput} />
                <TextInput placeholder='Password' style={styles.textInput} />
                <TextInput placeholder='Confirm Password' style={styles.textInput} />
            </View>

            <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('PatientHome')}>
                <Text style={{ color: 'white', fontSize: 16 }} >CONFIRM</Text>
                <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
            </TouchableOpacity>
            <View style={styles.SignInMessage}>
                <Text style={{color: 'blue', fontSize: 17}}
                    onPress={() => navigation.navigate('SignIn')}>Already have an account? Sign In
                </Text>
            </View>
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
    SignInMessage: {
        flexDirection: 'row',
        marginVertical: 12,
        alignSelf: 'center'
    }
})