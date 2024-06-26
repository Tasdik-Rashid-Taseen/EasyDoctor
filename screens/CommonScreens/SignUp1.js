import React from 'react'
import { View, Text, Button } from 'react-native'

const SignUp1 = ({ navigation, route }) => {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', fontFamily: 'Roboto', width: '90%' }}>
            <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10 }}>Are You?</Text>
            <Button title='A Doctor' color={"#E96479"} onPress={() => navigation.navigate('DocSignUp',  {
                role: 'doctor'})} />
            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Or</Text>
            <Button title='A Patient' color={"#E96479"} onPress={() => navigation.navigate('PatientSignUp', {
                paramRole: 'patient'})} />

            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Or</Text>
            <Button title='An Admin' color={"#E96479"} onPress={() => navigation.navigate('AdminSignIn', {
                paramRole: 'admin'})} />
        </View>
    )
}

export default SignUp1

