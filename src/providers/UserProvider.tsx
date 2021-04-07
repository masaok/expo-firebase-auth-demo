import React, { useState, useEffect, createContext } from 'react'

import { auth } from '../firebase'

const UserContext = createContext({ user: null })

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser(userAuth)
    })
  })

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export { UserContext }

export default UserProvider
