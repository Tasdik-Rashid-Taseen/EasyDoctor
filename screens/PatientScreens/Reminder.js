import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, ScrollView } from 'react-native'
import Icon from '../Icon'
const Reminder = ({ navigation, route }) => {
    function presssedOption() {
        console.log('Pressed')
    }
    return (
        <View style={styles.contents}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.drinkWater}>
                        <Text style={styles.h2}>Drink Water</Text>
                        <View style={styles.hours}>
                            <Text style={styles.hour}>1 hr</Text>
                            <Text style={styles.hour}>1:30 hr</Text>
                            <Text style={styles.hour}>2 hr</Text>
                            <Text style={styles.hour}>2:30 hr</Text>
                            <Text style={styles.hour}>3 hr</Text>
                        </View>
                    </View>
                    <View style={styles.medicine}>
                        <Text style={styles.h2}>Medicine</Text>
                        <View style={styles.clocks}>
                            <Text style={styles.clock}>9:00 AM</Text>
                            <Text style={styles.clock}>12:00 PM</Text>
                            <Text style={styles.clock}>2:00 PM</Text>
                            <Text style={styles.clock}>4:00 PM</Text>
                            <Text style={styles.clock}>6:00 PM</Text>
                            <Text style={styles.clock}>8:00 PM</Text>
                            <Text style={styles.clock}>10:00 PM</Text>
                            <Text style={styles.clock}>12:00 AM</Text>
                        </View>
                    </View>
                </ScrollView>

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

export default Reminder


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
        marginVertical: 23,
        marginHorizontal: 30,
        marginBottom: '14%',
    },
    h1: {
        fontSize: 30,

    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    
    hours: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10
    },
    hour: {
        marginHorizontal: 3,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        width: '23%',
        borderColor: "#AEBDCA",
        marginVertical: 3,
        textAlign: 'center'
    },

    clocks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        width: '100%',
    },
    clock: {
        marginHorizontal: 3,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        width: '23%',
        borderColor: "#AEBDCA",
        marginVertical: 3,
        textAlign: 'center'
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