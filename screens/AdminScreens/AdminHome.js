import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image, fontWeight } from 'react-native'
import { ScrollView } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc, QuerySnapshot, getDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebase'
import { where } from 'firebase/firestore/lite'
import firebaseConfig from '../../firebase'

import Icon from '../Icon'
const AdminHome = ({ navigation, route }) => {
    const [doctors, setDoctors] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const goToPrev = false;
    useEffect(() => {
        navigation.addListener("beforeRemove", (e) => {
            if (goToPrev == true) {
                console.log("Can't go to previos page")
            } else {
                e.preventDefault();
            }
        });
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setCurrentUser(user.uid)
            } else {
                // console.log("no user available")
            }
        })
        const getDocsData = async () => {

            const appointmentCollection = collection(db, 'doctorList')
            const appointmentSnapshot = await getDocs(appointmentCollection)
            setDoctors(appointmentSnapshot.docs.map((doc) =>
            // console.log(doc.data())
            ({
                ...doc.data(),
                id: doc.id
            }

            )

            ))




        }
        getDocsData();

    }, [])

    function confirmBtn() {
        console.log("Confirm")
    }
    function presssedOption() {
        console.log('Pressed')
    }


    return (
        <View style={styles.contents}>
            <View style={styles.container}>
                <Text>Admin Panel</Text>
                {
                    doctors.map((doctor) => {

                        return doctor.status == "unconfirmed" ?

                            <TouchableOpacity key={doctor.id} style={styles.appointment}>
                                <Text style={styles.tap}>Doctor details</Text>
                                <View style={styles.appointmentDetails}>
                                    <Text style={styles.h2}>{doctor.doc_username}</Text>
                                    <View style={styles.date_time_status}>
                                        <View style={styles.info}>
                                            <Icon style={styles.infoIcon} type="ant" name="phone" ></Icon>
                                            <Text style={styles.date}>Number: {doc.doc_num}</Text>
                                            <Text id='docID'>{doctor.id}</Text>
                                        </View>
                                        <View style={styles.info}>
                                            <Icon style={styles.infoIcon} type="ant" name="clockcircleo" ></Icon>
                                            <Text style={styles.date}>Specialist: {doctor.doc_speciality}</Text>
                                        </View>
                                        <View style={styles.info}>

                                            <Icon style={styles.infoIcon} type="ant" name="infocirlce" ></Icon>
                                            <Text style={styles.date}>L Number: {doctor.doc_licenceNum}</Text>
                                        </View>
                                        <View style={styles.info}>
                                            <Icon style={styles.infoIcon} type="ant" name="enviromento" ></Icon>
                                            <Text style={styles.place}>{doctor.doc_location}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.actions}>
                                    <TouchableOpacity style={styles.confirmButton} onPress={async() => {
                                        navigation.navigate('AdminHome')
                                        await updateDoc(doc(db, 'doctorList', doctor.id), {
                                            status: "approved",
                                        })
                                       
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 16, }}>Confirm</Text>
                                        <Icon style={styles.buttonIcon} type="ant" name="checkcircle" ></Icon>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelButton} onPress={async() => {
                                    
                                        await deleteDoc(doc(db, 'doctorList', doctor.id));
                                        console.log("Deleted")
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 16, }}>Cancel</Text>
                                        <Icon style={styles.buttonIcon} type="ant" name="closecircle" ></Icon>
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                            :
                            console.log("No other thing to show")

                    })
                }
            </View>
        </View>



    )
}

export default AdminHome

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
    docContents: {
        flexDirection: 'row'
    },
    filterIcon: {
        marginRight: 5,
        fontSize: 20,
        color: '#7895B2',
        alignSelf: 'center'
    },
    searchBoxContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: "#AEBDCA",
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,
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
        // marginVertical: 20,
        // marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'space-around',
        borderBottomColor: '#AEBDCA',
        borderBottomWidth: 1
    },
    listCategory: {
        backgroundColor: '#7895B2',
        // marginHorizontal: 5,
        marginVertical: 10,
        width: '45%',
        height: 40,
        textAlign: 'center',
        // padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: 'white'
    },

    appointments: {

    },

    appointmentDetails: {
        // backgroundColor: 'green',
        width: '90%',

    },
    opts: {
        // backgroundColor: 'red'
    },
    appointment: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 12,
        width: '100%',
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#AEBDCA",
        paddingVertical: 6,
        alignContent: 'center',

    },
    tap: {
        fontSize: 16,
        backgroundColor: '#698269',
        width: '90%',
        textAlign: 'center',
        color: 'white',
        marginBottom: 3,
        paddingVertical: 5
    },
    actions: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginTop: 15
    },
    cancelButton: {

        flexDirection: 'row',
        backgroundColor: 'red',
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    confirmButton: {
        flexDirection: 'row',
        backgroundColor: 'green',
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    buttonIcon: {
        marginLeft: 5,
        fontSize: 20,
        color: 'white'
    },
    date_time_status: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        justifyContent: 'space-between',
        width: '100%',
    },
    info: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    infoIcon: {
        marginRight: 5,
        fontSize: 20,
        // color: 'white'
    },
    date: {
        color: '#827D7D',
        fontWeight: 'bold',
    },
    time: {
        color: '#827D7D',
        fontWeight: 'bold',
    },
    status: {
        color: '#827D7D',
        fontWeight: 'bold',
    },
    place: {
        color: '#827D7D',
        fontWeight: 'bold',

    },
    opt: {
        textAlign: 'right'
    },
    cancel: {
        textAlign: 'right',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    },
    edit: {
        textAlign: 'right',
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 15
    },

    textBold: {
        fontWeight
    },
    optionIcon: {
        // marginLeft: 5,
        fontSize: 25,
        color: '#7895B2',
        // backgroundColor: 'red',
        paddingHorizontal: 30,
        paddingVertical: 6,
        alignSelf: 'center'
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
        justifyContent: 'space-evenly',
        padding: 5,
        height: '7%',
        borderTopColor: "#AEBDCA",
        borderTopWidth: 2,
        // backgroundColor: 'green'

    },
})