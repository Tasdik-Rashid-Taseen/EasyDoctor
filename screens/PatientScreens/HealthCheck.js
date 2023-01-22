import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import Icon from '../Icon'
const HealthCheck = ({ navigation, route }) => {
  function presssedOption() {
    console.log('Pressed')
  }
  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <Text style={styles.h1}>Doctor</Text>
        <View>
          <TextInput placeholder='Age' style={styles.textInput} />
          <TextInput placeholder='Height' style={styles.textInput} />
          <TextInput placeholder='BP' style={styles.textInput} />
          <TextInput placeholder='Temparature' style={styles.textInput} />
        </View>

        <Button title='Show Result' color={"#7895B2"} />
      </View>
      <Pressable style={styles.footer} onPress={presssedOption}>

        <Icon style={styles.optionIcon} type="ant" name="home" onPress={() => navigation.navigate('')}></Icon>
        <Icon style={styles.optionIcon} type="ant" name="setting" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="calendar" ></Icon>
        <Icon style={styles.optionIcon} type="ant" name="user" ></Icon>

      </Pressable>
    </View>
  )
}

export default HealthCheck


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
  textInput: {
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "100%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,

  },
  buttonIcon: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white'
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
    borderWidth: 2,
    borderColor: "#AEBDCA",
  },


})