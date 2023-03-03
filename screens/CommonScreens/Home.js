import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from '../Icon'
const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image source={require('../images/app_icon/easyIcon.png')} style={{}}/>
      <Text style={styles.moto}>Your Health, Our Responsibility</Text>
      <TouchableOpacity style={styles.buttonBoxContainer} onPress={() => navigation.navigate('SignUp1')}>
        <Text style={{ color: 'white', fontSize: 18 }} >Get Started</Text>
        <Icon style={styles.buttonIcon} type="ionicon" name="caret-forward-outline" ></Icon>
      </TouchableOpacity>
    </View>
  )
}
export default Home




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
  buttonIcon: {
    marginLeft: 5,
    fontSize: 22,
    color: 'white'
  },
  buttonBoxContainer: {
    backgroundColor: '#E96479',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#AEBDCA",
    width: "40%",
    padding: 6,
    paddingLeft: 16,
    marginVertical: 8,
    justifyContent: 'center'
  },
  moto: {
    width: '50%',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
