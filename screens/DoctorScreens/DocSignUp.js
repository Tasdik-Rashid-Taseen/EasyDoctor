import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'



const DocSignUp = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Doctor</Text>
            <View>
                <TextInput placeholder='Username' style={styles.textInput} />
                <TextInput placeholder='Email' style={styles.textInput} />
                <TextInput placeholder='Number' style={styles.textInput} />
                <TextInput placeholder='Speciality' style={styles.textInput} />
                <TextInput placeholder='Dictor Licence Number' style={styles.textInput} />
                <TextInput placeholder='Password' style={styles.textInput} />
                <TextInput placeholder='Confirm Password' style={styles.textInput} />
            </View>
            <View style={styles.SignInMessage}>
                <Text style={{ fontSize: 16 }}>Already have an account?  </Text>
                <Text style={{ color: 'blue', fontSize: 16 }}
                    onPress={() => navigation.navigate('SignIn')}>Sign In
                </Text>
            </View>
            <Button title='Confirm' color={"#7895B2"} />
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
    }
})

