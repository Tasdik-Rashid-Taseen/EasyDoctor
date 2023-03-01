import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, ScrollView, Modal, } from 'react-native'
import Icon from '../Icon'
import call from 'react-native-phone-call'

const Emergency = ({ navigation, route }) => {
    const [isModalVisible, setisModalVisible] = useState(false)
    // constructor() {
    //     super();
    //     this.state = {
    //         show: false
    //     }
    // }

    // render() {
    // const [dialNum, setDialNum] = useState('')
    function presssedOption() {
        console.log('Pressed')
    }
    function triggerCall() {
        const args = {
            number: '922',
            prompt: true,
        }
        call(args).catch(console.error)
    }

    return (
        <View style={styles.contents}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>What is emergency service</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo sed efficitur ullamcorper. Curabitur id auctor mauris, iscing elit. In consectetur  m ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo sed efficitur ullamcorper. Curabitur id ur  m ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo sed efficitur ullamcorper. orper. Curabitur id auctor mauris, iscing elit. In consectetur  m ipsum dolor sit amet, consectetur adipis amet, consectetur adipiscing elit. In consectetur justo sed efficitur ullamcorper. orper. Curabitur id auctor mauris, iscing elit. In consectetur  m ipsum dol</Text>
                </View>
                <Text style={styles.callBtn} onPress={() => { setisModalVisible(true); }}>Call Emergency Service</Text>
            </View>
            <Modal transparent={true} animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => setisModalVisible(false)}>
                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 20, borderRadius: 10, flex: 1 }}>
                        <Text style={styles.h3}>Hospital Name</Text>
                        <Text style={styles.service} onPress={() => {
                            const args = {
                                number: '911',
                                prompt: true,
                            }
                            call(args).catch(console.error)
                        }} >Ibn Sina</Text>
                        <Text style={styles.service} onPress={() => {
                            const args = {
                                number: '922',
                                prompt: true,
                            }
                            call(args).catch(console.error)
                        }}>Oasis</Text>
                        <Text style={styles.service} onPress={() => {
                            const args = {
                                number: '933',
                                prompt: true,
                            }
                            call(args).catch(console.error)
                        }}>Popular</Text>
                        <Text style={styles.close} onPress={() => setisModalVisible(false) }>Close</Text>
                    </View>

                </View>
            </Modal>
            <Pressable style={styles.footer} onPress={presssedOption}>
                {/* Fix the navigation funciton not working */}
                <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
                <Icon style={styles.optionIcon} type="ant" name="setting" onPress={() => navigation.navigate('Settings')}></Icon>
                <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
                <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>

            </Pressable>
        </View>
    )
}


// }

export default Emergency


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
    h3:{
        fontSize: 20
      },
    callBtn: {
        padding: 30,
        backgroundColor: '#7895B2',
        textAlign: 'center',
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
    service: {
        padding: 10,
        backgroundColor: '#7895B2',
        textAlign: 'center',
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        width: "80%",
        height: "7%",
    },
    close: {
        padding: 10,
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        width: "80%",
        height: "7%",
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