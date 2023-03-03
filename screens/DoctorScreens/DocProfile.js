import { useNavigation } from '@react-navigation/native'
import { React, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image, Alert } from 'react-native'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import Icon from '../Icon'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore/lite'

const DocProfile = ({ navigation, route }) => {
    // console.warn = () => {};
    const [currentUserID, setcurrentUserID] = useState('');
    const [doctor, setDoctor] = useState([])
    useEffect(() => {



    })
    function presssedOption() {
        console.log('Pressed')

    }

    function patientLogOut() {
        authentication
            .signOut()
            .then(() => {
                navigation.navigate('SignUp1')
                console.log("Loged out")
            })

    }






    return (
        <View style={styles.contents}>
            <View style={styles.container}>


                <View style={styles.profile_opts}>
                    <TouchableOpacity style={styles.profile_opt} onPress={() => {
                        navigation.navigate('DocProfileDetails')
                    }
                    }>
                        <View style={{ flexDirection: 'row', paddingVertical: 6, paddingHorizontal: 10, }}>
                            <Icon style={styles.optIcon} type="ant" name="user" ></Icon>
                            <Text style={{ fontSize: 16, }}>Profile Details</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Icon style={styles.optIcon} type="ant" name="right" ></Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt} onPress={() => navigation.navigate('AboutApp')}>
                        <View style={{ flexDirection: 'row', paddingVertical: 6, paddingHorizontal: 10, }}>
                            <Icon style={styles.optIcon} type="ant" name="infocirlceo" ></Icon>
                            <Text style={{ fontSize: 16, }}>About App</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Icon style={styles.optIcon} type="ant" name="right" ></Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt} onPress={() => navigation.navigate('DevSup')}>
                        <View style={{ flexDirection: 'row', paddingVertical: 6, paddingHorizontal: 10, }}>
                            <Icon style={styles.optIcon} type="ant" name="android" ></Icon>
                            <Text style={{ fontSize: 16, }}>About Developers & Supervisor</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Icon style={styles.optIcon} type="ant" name="right" ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonBoxContainer} onPress={patientLogOut}>
                    <Text style={{ color: 'white', fontSize: 16 }} >Logout</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="logout" ></Icon>
                </TouchableOpacity>
            </View>
            <Pressable style={styles.footer} onPress={presssedOption}>

                <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('DocHome')}></Icon>
                <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('DocProfile')}></Icon>

            </Pressable>
        </View>
    )
}

export default DocProfile


const styles = StyleSheet.create({
    contents: {
        flex: 1,
        justifyContent: 'center',
        // marginVertical: 23,
        // marginHorizontal: 20,
        height: '100%',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 23,
        marginHorizontal: 30,
        height: '100%',
        marginBottom: '14%',
    },
    h1: {
        fontSize: 30,

    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#AEBDCA",
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,

    },
    pic_name: {
        alignSelf: 'center',

    },
    docImageS: {
        width: 150,
        height: 150,
        padding: 5,
        borderRadius: 150 / 2,
        alignSelf: 'center'
    },
    profile_opt: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomColor: '#7895B2',
        borderBottomWidth: 1,
        justifyContent: 'space-between',



        width: "100%",

    },
    profile_opts: {
        marginVertical: 20
    },
    optIcon: {
        marginRight: 5,
        fontSize: 20,
        color: '#7895B2'
    },
    buttonIcon: {
        marginLeft: 5,
        fontSize: 20,
        color: 'white'
    },
    buttonBoxContainer: {
        backgroundColor: '#F55050',
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    optionIcon: {
        marginLeft: 5,
        fontSize: 30,
        color: '#7895B2',
    },
    footer: {
        position: 'absolute',
        // left: '45%',
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // marginVertical: 12,
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'space-around',
        padding: 5,
        height: '6%',
        borderTopColor: "#AEBDCA",
        borderTopWidth: 2
    },


})