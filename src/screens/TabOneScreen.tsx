import * as React from 'react'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

import * as firebase from 'firebase'

// Optionally import the services that you want to use
import 'firebase/auth'
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

const firebaseConfig = {
  apiKey: 'AIzaSyAsYYJUjcksoIJRtUt-iNBU-hBuM71bxZk',
  authDomain: 'expo-firebase-auth-demo-38397.firebaseapp.com',
  projectId: 'expo-firebase-auth-demo-38397',
  storageBucket: 'expo-firebase-auth-demo-38397.appspot.com',
  messagingSenderId: '1056162976566',
  appId: '1:1056162976566:web:10962dfd57d1ecef7d9997',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

export default TabOneScreen
