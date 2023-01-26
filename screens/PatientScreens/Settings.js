import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Switch } from 'react-native'
import { useState } from 'react';
import Icon from '../Icon'
const Settings = ({ navigation, route }) => {
    function presssedOption() {
        console.log('Pressed')
    }
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [oneIsEnabled, setOneIsEnabled] = useState(false);
    const toggleSwitch1 = () => setOneIsEnabled(previousState => !previousState);

    const [twoIsEnabled, setTwoIsEnabled] = useState(false);
    const toggleSwitch2 = () => setTwoIsEnabled(previousState => !previousState);

    const [threeIsEnabled, setThreeIsEnabled] = useState(false);
    const toggleSwitch3 = () => setThreeIsEnabled(previousState => !previousState);
    return (
        <View style={styles.contents}>
            <View style={styles.container}>


                <View style={styles.profile_opts}>
                    <TouchableOpacity style={styles.setting_opt} onPress={() => navigation.navigate('ProfileDetails')}>
                        <View style={{ paddingVertical: 6, paddingHorizontal: 10, }}>                       
                            <Text style={{ fontSize: 16,}}>Allow Push Notifications</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Switch trackColor={{ false: '#767577', true: '#34C658' }} thumbColor={oneIsEnabled ? 'white' : '#f4f3f4'} onValueChange={toggleSwitch1} value={oneIsEnabled} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setting_opt} onPress={() => navigation.navigate('ProfileDetails')}>
                        <View style={{ paddingVertical: 6, paddingHorizontal: 10, }}>                       
                            <Text style={{ fontSize: 16,}}>Messages</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Switch trackColor={{ false: '#767577', true: '#34C658' }} thumbColor={twoIsEnabled ? 'white' : '#f4f3f4'} onValueChange={toggleSwitch2} value={twoIsEnabled} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setting_opt} onPress={() => navigation.navigate('ProfileDetails')}>
                        <View style={{ paddingVertical: 6, paddingHorizontal: 10, }}>                       
                            <Text style={{ fontSize: 16,}}>Appoinment Confirmation</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Switch trackColor={{ false: '#767577', true: '#34C658' }} thumbColor={threeIsEnabled ? 'white' : '#f4f3f4'} onValueChange={toggleSwitch3} value={threeIsEnabled} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('')}>
                    <Text style={{ color: 'white', fontSize: 16 }} >Logout</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="logout" ></Icon>
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

export default Settings


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
    setting_opt: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderBottomColor: '#7895B2',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',


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