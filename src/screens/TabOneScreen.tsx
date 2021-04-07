import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'

import { Text, View } from '../components/Themed'

// import * as firebase from 'firebase'

import { auth, signInWithGoogle, generateUserDocument } from '../firebase'

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

// const firebaseConfig = {
//   apiKey: 'AIzaSyAsYYJUjcksoIJRtUt-iNBU-hBuM71bxZk',
//   authDomain: 'expo-firebase-auth-demo-38397.firebaseapp.com',
//   projectId: 'expo-firebase-auth-demo-38397',
//   storageBucket: 'expo-firebase-auth-demo-38397.appspot.com',
//   messagingSenderId: '1056162976566',
//   appId: '1:1056162976566:web:10962dfd57d1ecef7d9997',
// }
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)

const TabOneScreen = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState<string>('')

  const createUserWithEmailAndPasswordHandler = async (
    event: any,
    email: string,
    password: string
  ) => {
    event.preventDefault()
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      generateUserDocument(user, { displayName })
    } catch (error) {
      setError('Error Signing up with email and password')
      console.log('ERROR:')
      console.log(error)
    }

    setEmail('')
    setPassword('')
    setDisplayName('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        title="Google Login"
        onPress={event => {
          createUserWithEmailAndPasswordHandler(event, email, password)
        }}
      />
    </View>
  )
}

export default TabOneScreen
