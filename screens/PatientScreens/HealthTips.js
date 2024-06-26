import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable, ScrollView, RefreshControl } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs, doc, setDoc, QuerySnapshot, getDoc } from 'firebase/firestore/lite'
import Icon from '../Icon'

const HealthTips = ({ navigation, route }) => {
    const [tips, setTips] = useState([])
    useEffect(() => {

        const getDocInfo = async () => {
            const tipsCollection = collection(db, 'healthTips')
            const tipSnapshot = await getDocs(tipsCollection)
            setTips(tipSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }

            )))

        }

        getDocInfo();
    })
    function presssedOption() {
        console.log('Pressed')
    }

    const getDocInfo = async () => {
        const tipsCollection = collection(db, 'healthTips')
        const tipSnapshot = await getDocs(tipsCollection)
        setTips(tipSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }

        )))

    }

    const [refresh, setRefresh] = useState(false)
    const pullMe = () => {
        getDocInfo();
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 4000)
    }
    return (
        <View style={styles.contents}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
                }>
                    <View style={styles.searchBoxContainer}>
                        <Icon style={styles.filterIcon} type="ant" name="search1" ></Icon>
                        <TextInput placeholder='Search' />
                    </View>
                    {
                        tips.map((tip) => {

                            return (
                                <View key={tip.id} style={styles.docContents}>
                                    <View style={styles.tip}>
                                        <Text style={styles.h3}>{tip.title}</Text>
                                        <Text>{tip.details}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>


            </View>
            <Pressable style={styles.footer} onPress={presssedOption}>

                <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('PatientHome')}></Icon>
                <Icon style={styles.optionIcon} type="ant" name="user" onPress={() => navigation.navigate('PatientProfile')}></Icon>

            </Pressable>
        </View>
    )
}

export default HealthTips


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
        marginBottom: '14%',
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
    h1: {
        fontSize: 30,

    },
    h3: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    tip: {
        borderWidth: 1,
        borderColor: "#AEBDCA",
        padding: 5,
        marginTop: 8
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