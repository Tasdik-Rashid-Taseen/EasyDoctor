import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView, Pressable, Image } from 'react-native'
import Icon from '../Icon'
const DocDetails = ({ navigation, route }) => {
    function pressedDoctor() {
        console.log('Pressed')
    }

    function presssedOption() {
        console.log('Pressed')
    }

    return (
        <View style={styles.contents}>
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.docImageB} source={require('../images/doctors/doc4.jpg')}></Image>
                    <View style={styles.docBio}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Fazle Rabbi Tuhin</Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#827D7D' }}>Medicine & Cardiology</Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#827D7D', marginBottom: 5 }}>Sylhet Medical College</Text>
                        <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('MakeApp')}>
                            <Text style={{ color: 'white', fontSize: 16 }} >Make Appointment</Text>
                            <Icon style={styles.buttonIcon} type="ant" name="calendar" ></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.docAbout}>
                        <Text style={styles.title}>About</Text>
                        <Text>Lorem ipsum dolor sit amet, omag he ofade consectetur adipiscing elit. Vestibulum neque sem, faucibus a massa et, dictum porttitor elit. Donec rhoncus dui vitae mi dictum, congue fringilla massa feugiat. Praesent et dui tincidunt, laoreet ex qsemper est vel arcu ornare, ac tempor turpis tincidunt. Praesent in augue libero. Phasellus non libero tellus. Nam ut mollis sem. Maecenas turpis risus, auctor non scelerisque id, egestas et lectus. Donec tincidunt sapien quis augue ullamcorper, a dapibus arcu rhoncus.
                        </Text>
                    </View>
                    <View style={styles.doctor}>
                        <Text style={styles.title}>Suggested Doctors</Text>
                        <Pressable style={styles.listDoctors} onPress={pressedDoctor}>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc1.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 5</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc2.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 5</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc3.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 5</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc4.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 5</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc5.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 5</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc6.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 4.9</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc7.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 4.9</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listDoctor} onPress={() => navigation.navigate('DocDetails')}>
                                <Image style={styles.docImageS} source={require('../images/doctors/doc8.jpg')}></Image>
                                <View style={styles.docInfo}>
                                    <Text style={styles.textBold}>Fazle Rabbi Tuhin</Text>
                                    <Text style={styles.textThin}>Medicine & Cardiology</Text>
                                    <Text>Ratings: 4.8</Text>
                                </View>
                            </TouchableOpacity>


                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            <Pressable style={styles.footer} onPress={presssedOption}>

                <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
                <Icon style={styles.optionIcon} type="ant" name="setting" ></Icon>
                <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
                <Icon style={styles.optionIcon} type="ant" name="user" ></Icon>

            </Pressable>

        </View>

    )
}

export default DocDetails


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
        marginVertical: 5,
        marginHorizontal: 15,
        height: '100%',
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
        width: "80%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    title: {
        fontSize: 20
    },
    category: {
        flex: 1,
        marginVertical: 5
    },
    listCategories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 12,
        width: '100%',
        // backgroundColor: "red",
        justifyContent: 'space-around',
    },
    listCategory: {
        backgroundColor: '#F5EFE6',
        // marginHorizontal: 5,
        marginVertical: 10,
        width: '45%',
        height: '25%',
        textAlign: 'center',
        // padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    doctor: {
        flex: 1,

    },
    listDoctors: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 12,
        width: '100%',
        // backgroundColor: "red",
        justifyContent: 'space-around'
    },
    listDoctor: {
        backgroundColor: 'white',
        marginHorizontal: 0,
        marginVertical: 10,
        width: '48%',
        height: 220,
        borderWidth: 1,
        borderColor: "#F2F2F2",
        justifyContent: 'center',
        alignItems: 'center'
    },
    docImageS: {
        width: 130,
        height: 130,
        padding: 5,
    },
    docImageB: {
        width: 200,
        height: 200,
        padding: 5,
        alignSelf: 'center',
        marginVertical: 15,

    },
    docBio: {
        margin: 5,
        alignSelf: 'center',
        borderTopColor: '#AEBDCA',
        borderTopWidth: 1,
        borderBottomColor: '#AEBDCA',
        borderBottomWidth: 1,
        width: '100%',
        padding: 5,
        // backgroundColor: 'red'
    },
    docInfo: {
        textAlign: 'left',
        padding: 5,
    },
    docAbout: {
        marginTop: 10,
        marginBottom: 30,

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