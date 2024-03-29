import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// React Firebase Image Upload tutorial:
// https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
import 'firebase/storage'

import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user: any, additionalData: any) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      })
    } catch (error) {
      console.error('Error creating user document', error)
    }
  }
  return getUserDocument(user.uid)
}

const getUserDocument = async (uid: any) => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()

    return {
      uid,
      ...userDocument.data(),
    }
  } catch (error) {
    console.error('Error fetching user', error)
  }
}

export { firebase as default }
