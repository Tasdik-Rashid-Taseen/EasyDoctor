import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from '../Icon'
const DevSup = ({ navigation }) => {

  return (
    <View style={styles.contents}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.h1}>Supervisor</Text>
        <View style={styles.listUser}>
          <View style={styles.demo}>
            <Image style={styles.docImageS} source={require('../images/DevSup/Shoaib-Rahman.jpg')}></Image>
            <View style={styles.docInfo} >
              <Text style={styles.textBold}>Mohammad Shoaib Rahman</Text>
              <Text style={styles.textThin}>Lecturer</Text>
              <Text style={styles.textThin}>CSE</Text>
            </View>
          </View>

        </View>
        <Text style={styles.h1}>Developers</Text>
        <View style={styles.listUser}>
          <View style={styles.demo}>
            <Image style={styles.docImageS} source={require('../images/DevSup/Md-Tasdik-Rashid.jpg')}></Image>
            <View style={styles.docInfo} >
              <Text style={styles.textBold}>Md. Tasdik Rashid</Text>
              <Text style={styles.textThin}>CSE-53rd, A</Text>
              <Text style={styles.textThin}>2012020019</Text>
              <Text style={styles.textThin}>CSE</Text>
            </View>
          </View>

        </View>
        <View style={styles.listUser}>
          <View style={styles.demo}>
            <Image style={styles.docImageS} source={require('../images/DevSup/Md-Fazla-Rabbi-Tuhin.jpg')}></Image>
            <View style={styles.docInfo} >
              <Text style={styles.textBold}>Md. Fazla Rabbi Tuhin</Text>
              <Text style={styles.textThin}>CSE-52nd, A</Text>
              <Text style={styles.textThin}>1932020005</Text>
            </View>
          </View>

        </View>
        <View style={styles.listUser}>
          <View style={styles.demo}>
            <Image style={styles.docImageS} source={require('../images/DevSup/Fahmida-Parvin.jpg')}></Image>
            <View style={styles.docInfo} >
              <Text style={styles.textBold}>Fahmida Parvin</Text>
              <Text style={styles.textThin}>CSE-52nd, A</Text>
              <Text style={styles.textThin}>1932020025</Text>
            </View>
          </View>

        </View>
        </ScrollView>
      
        
      </View>

    </View>
  )
}
export default DevSup




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
    justifyContent: 'flex-start',

    marginHorizontal: 30,
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    color: "#E96479",
    fontWeight: 'bold',
    marginVertical: 10
  },
  p: {
    fontSize: 16,

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
  docImageS: {
    width: 120,
    height: 100,
    padding: 5,
  },
  listUser: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    marginVertical: 10,
    width: '100%',
    height: 180,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#AEBDCA",
  },
  demo:{
    flexDirection: 'row',
    marginBottom: 10,
    width: '90%'
  },
  docInfo: {
    textAlign: 'left',
    padding: 5
  },
  textBold:{
    fontWeight: 'bold'
  }
});
