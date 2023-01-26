import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image } from 'react-native'
import Icon from '../Icon'
const ProfileDetails = ({ navigation, route }) => {
    function presssedOption() {
        console.log('Pressed')
    }
    return (
        <View style={styles.contents}>
            <View style={styles.container}>


                <View style={styles.profile_opts}>
                    <TouchableOpacity style={styles.profile_opt} >
                        <Text style={{ fontSize: 18, }}>First Name</Text>
                        <Text style={{ fontSize: 18, }}>Tasdik</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt} >
                        <Text style={{ fontSize: 18, }}>Last Name</Text>
                        <Text style={{ fontSize: 18, }}>Rashid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Username</Text>
                        <Text style={{ fontSize: 18, }}>tasdikrashid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Number</Text>
                        <Text style={{ fontSize: 18, }}>01757744079</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Mail</Text>
                        <Text style={{ fontSize: 18, }}>tasdikrashid@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Password</Text>
                        <Text style={{ fontSize: 18, }}>**********</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('')}>
                    <Text style={{ color: 'white', fontSize: 16 }} >Delete Account</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="delete" ></Icon>
                </TouchableOpacity>
            </View>
            <Pressable style={styles.footer} onPress={presssedOption}>

            <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="setting" onPress={() => navigation.navigate('Settings')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>

            </Pressable>
        </View>
    )
}

export default ProfileDetails


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
    },
    h1: {
        fontSize: 30,

    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
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
        alignSelf: 'center'
    },
    docImageS: {
        width: 150,
        height: 150,
        padding: 5,
        borderRadius: 150 / 2,
        alignSelf: 'center'
    },
    profile_opts: {
        backgroundColor: "#F5F5F5"
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