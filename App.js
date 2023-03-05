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
import HealthTips from './screens/PatientScreens/HealthTips';
import Emergency from './screens/PatientScreens/Emergency';
import DocHome from './screens/DoctorScreens/DocHome';
import PatientProfile from './screens/PatientScreens/PatientProfile';
import ProfileDetails from './screens/PatientScreens/ProfileDetails';
import DocProfile from './screens/DoctorScreens/DocProfile';
import DocProfileDetails from './screens/DoctorScreens/DocProfileDetails';
import AdminHome from './screens/AdminScreens/AdminHome';
import Adm_HealthTips from './screens/AdminScreens/Adm_HealthTips';
import AdminSignIn from './screens/AdminScreens/AdminSignIn';
import DevSup from './screens/CommonScreens/DevSup';
import AboutApp from './screens/CommonScreens/AboutApp';
const Tab = createNativeStackNavigator();

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
                backgroundColor: '#E96479',
              }, headerTintColor: '#fff'
            }}
          />


          <Stack.Screen name="SignUp1" component={SignUp1} options={{
            title: 'Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#E96479',
            }, headerTintColor: '#fff'
          }} />

          <Stack.Screen name="DocSignUp" component={DocSignUp} options={{
            title: 'Doctor Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#3A98B9',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientSignUp" component={PatientSignUp} options={{
            title: 'Patient Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocSignIn" component={DocSignIn} options={{
            title: 'Doctor Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#3A98B9',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientSignIn" component={PatientSignIn} options={{
            title: 'Patient Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocProfile" component={DocProfile} options={{
            title: 'Doctor Profile', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#3A98B9',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="DocProfileDetails" component={DocProfileDetails} options={{
            title: 'Edit Profile', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#3A98B9',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="PatientHome" component={PatientHome} options={{
            title: 'Home-Patient', headerTitleAlign: 'center',
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />

          <Stack.Screen name="PatientProfile" component={PatientProfile} options={{
            title: 'Profile', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />

          <Stack.Screen name="DoctorsList" component={DoctorsList} options={{
            title: 'Doctors List', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="MakeApp" component={MakeApp} options={{
            title: 'Make Appointment', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="HealthCheck" component={HealthCheck} options={{
            title: 'Health Checkup', headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff',
          }} />

          <Stack.Screen name="HealthTips" component={HealthTips} options={{
            title: 'Health Tips', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="Emergency" component={Emergency} options={{
            title: 'Emergency', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />



          <Stack.Screen name="DocHome" component={DocHome} options={{
            title: 'Home-Doctor', headerTitleAlign: 'center', headerBackVisible: false,  headerStyle: {
              backgroundColor: '#3A98B9',
            }, headerTintColor: '#fff'
          }} />


          <Stack.Screen name="ProfileDetails" component={ProfileDetails} options={{
            title: 'Edit Profile', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#698269',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="AdminSignIn" component={AdminSignIn} options={{
            title: 'Admin Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="AdminHome" component={AdminHome} options={{
            title: 'Admin Home', headerTitleAlign: 'center', headerBackVisible: false, headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="Adm_HealthTips" component={Adm_HealthTips} options={{
            title: 'Admin HealthTips', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />

          <Stack.Screen name="AboutApp" component={AboutApp} options={{
            title: 'About App', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />
    
          <Stack.Screen name="DevSup" component={DevSup} options={{
            title: 'About Developers & Supervisors', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;











