/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.moto}>Your Health, Our Responsibility</Text>
      <Button title='Get started' color={"#7895B2"}/>
    </View>
  );
}

*/


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './screens/CommonScreens/Home';
import SignUp1 from './screens/CommonScreens/SignUp1'
import DocSignUp from './screens/DoctorScreens/DocSignUp';
import PatientSignUp from './screens/PatientScreens/PatientSignUp';
import DocSignIn from './screens/DoctorScreens/DocSignIn';
import PatientSignIn from './screens/PatientScreens/PatientSignIn';
import PatientHome from './screens/PatientScreens/PatientHome';
import DoctorsList from './screens/PatientScreens/DoctorsList';
import MakeApp from './screens/PatientScreens/MakeApp';
import HealthCheck from './screens/PatientScreens/HealthCheck';
import Reminder from './screens/PatientScreens/Reminder';
import HealthTips from './screens/PatientScreens/HealthTips';
import Emergency from './screens/PatientScreens/Emergency';
import DocDetails from './screens/PatientScreens/DocDetails';
import DocHome from './screens/DoctorScreens/DocHome';
import PatientAppointmentInfo from './screens/DoctorScreens/PatientAppointmentInfo';
import DocAppointmentInfo from './screens/PatientScreens/DocAppointmentInfo';



import { Button } from 'react-native-web';


import Icon from './screens/Icon';
const App = () => {


  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home', headerTitleAlign: 'center', headerStyle: {
                backgroundColor: '#7895B2',
              }, headerTintColor: '#fff'
            }}
          />
          <Stack.Screen name="SignUp1" component={SignUp1} options={{
            title: 'Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocSignUp" component={DocSignUp} options={{
            title: 'Doctor Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientSignUp" component={PatientSignUp} options={{
            title: 'Patient Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocSignIn" component={DocSignIn} options={{
            title: 'Doctor Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientSignIn" component={PatientSignIn} options={{
            title: 'Patient Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientHome" component={PatientHome} options={{
            title: 'Home-Patient', headerTitleAlign: 'center',
            // Un comment the next line when your code is ready
            // headerBackVisible: false, 
            headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DoctorsList" component={DoctorsList} options={{
            title: 'Doctors List', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="MakeApp" component={MakeApp} options={{
            title: 'Make Appointment', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="HealthCheck" component={HealthCheck} options={{
            title: 'Health Checkup', headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff',
          }} />
          <Stack.Screen name="Reminder" component={Reminder} options={{
            title: 'Reminder', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="HealthTips" component={HealthTips} options={{
            title: 'Health Tips', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="Emergency" component={Emergency} options={{
            title: 'Emergency', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocDetails" component={DocDetails} options={{
            title: 'Doctor Details', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />

          <Stack.Screen name="DocHome" component={DocHome} options={{
            title: 'Home-Doctor', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientAppointmentInfo" component={PatientAppointmentInfo} options={{
            title: 'Patient Appointment Info', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
<Stack.Screen name="DocAppointmentInfo" component={DocAppointmentInfo} options={{
            title: 'Doctor Appointment Info', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#7895B2',
            }, headerTintColor: '#fff'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;











