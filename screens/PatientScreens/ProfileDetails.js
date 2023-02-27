import { React, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, Image, Modal } from 'react-native'
import { db } from '../../firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite'
import { authentication } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Icon from '../Icon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
const ProfileDetails = ({ navigation, route }) => {
   
    const [isModalVisible, setisModalVisible] = useState(false)
    const [patient, setPatient] = useState([])
    const [inputText, setinputText] = useState();
    const [newUsername, setnewUsername] = useState('')
    const [newGender, setnewGender] = useState('')
    const [newNumber, setnewNumber] = useState('')
    // const [editItem, seteditItem] = useState();
    useEffect(() => {
        // onAuthStateChanged(authentication, async (user) => {
        //     if (user) {
        //         // console.log(user.uid)
        //         const userID = user.uid; 
        //         const patientCollection = await getDoc(doc(db, 'patientList', userID))

        //         // const patientList = patientCollection.docs.map(doc => doc.data())
        //         // console.log(patientCollection.data())
        //         setPatient(patientCollection.data());

        //     } else {
        //         // console.log("no user available")
        //     }

        // })
        const getData = async () => {
            const patientCollection = await getDoc(doc(db, 'patientList', route.params.userID))
            setPatient(patientCollection.data());
        }
        getData();
    })
    const onPressItem = () => {
        setisModalVisible(true);
        // setinputText(patient.patient_username)
        console.log("pressed")
        console.log(route.params.userID)
    }

    const onPressSaveEdit = () => {
        setisModalVisible(false)
        onAuthStateChanged(authentication, async (user) => {
            if (user) {
                // console.log(user.uid)
                const userID = user.uid;


                console.log("Update")
                await updateDoc(doc(db, 'patientList', userID), {
                    patient_username: newUsername,
                    patient_gender: newGender,
                    patient_num: newNumber,
                })

                
            } else {
                //console.log("no user available")
            }

        })
    }

    function profileOptChg(event) {
        // const id = event.currentTarget.id;
        // console.log(id);
    }

    function presssedOption() {
        console.log('Pressed')
    }
    return (
        <View style={styles.contents}>
            <View style={styles.container}>

                <SafeAreaView>

                </SafeAreaView>
                <View style={styles.profile_opts}>
                    <TouchableOpacity style={styles.profile_opt} >
                        <Text style={{ fontSize: 18, }}>Username</Text>
                        <Text style={{ fontSize: 18, }}>{patient.patient_username}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Gender</Text>
                        <Text style={{ fontSize: 18, }}>{patient.patient_gender}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Number</Text>
                        <Text style={{ fontSize: 18, }}>{patient.patient_num}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt}>
                        <Text style={{ fontSize: 18, }}>Mail</Text>
                        <Text style={{ fontSize: 18, }}>{patient.patient_email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_opt} >
                        <Text style={{ fontSize: 18, }}>Password</Text>
                        <Text style={{ fontSize: 18, }}>**********</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType='fade'
                        visible={isModalVisible}
                        onRequestClose={() => setisModalVisible(false)}
                    >
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 18 }}>Change Details</Text>

                            <TextInput style={styles.modalTextInput} onChangeText={(text) => {
                                setinputText(text)
                                setnewUsername(text)
                            }} defaultValue={patient.patient_username} editable={true} multiline={false} maxLength={200}></TextInput>
                            <TextInput style={styles.modalTextInput} onChangeText={(text) => {
                                setinputText(text)
                                setnewGender(text)
                            }} defaultValue={patient.patient_gender} editable={true} multiline={false} maxLength={200}></TextInput>
                            <TextInput style={styles.modalTextInput} onChangeText={(text) => {
                                setinputText(text)
                                setnewNumber(text)
                            }} defaultValue={patient.patient_num} editable={true} multiline={false} maxLength={200}></TextInput>
                            {/* <TextInput style={styles.modalTextInput} onChangeText={(text) => setinputText(text)} defaultValue={patient.patient_password} editable={true} multiline={false} maxLength={200}></TextInput> */}
                            <TouchableOpacity>
                                <TouchableOpacity style={styles.modalBoxContainer} onPress={() => onPressSaveEdit()}>
                                    <Text style={{ color: 'white', fontSize: 16 }} >Save</Text>
                                    <Icon style={styles.buttonIcon} type="ant" name="save" ></Icon>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={styles.buttonEditBoxContainer} onPress={onPressItem}>
                    <Text style={{ color: 'white', fontSize: 16 }} >Edit Details</Text>
                    <Icon style={styles.buttonIcon} type="ant" name="edit" ></Icon>
                </TouchableOpacity>
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

    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: "#AEBDCA",
        width: "80%",
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
    buttonEditBoxContainer: {
        backgroundColor: '#7895B2',
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        padding: 6,
        paddingLeft: 16,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    modalBoxContainer: {
        backgroundColor: 'black',
        // alignItems: 'flex-start',
        flexDirection: 'row',
        width: "100%",
        paddingVertical: 6,
        paddingHorizontal: 20,
        marginVertical: 8,
        justifyContent: 'flex-start',
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