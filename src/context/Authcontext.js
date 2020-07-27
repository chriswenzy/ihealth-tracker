import React, { useEffect } from 'react'
import {AuthServices} from '../services/Authservice'


const defaultState = {
    user: null,
    isLoading: false,
    login: async (model) => {},
    logout: () => {},
    refresh: () => {},
  }

 export const AuthContext = React.createContext(defaultState)

export const AuthConsumer = AuthContext.Consumer

export const AuthProvider= ({ children, navigation }) => {
//   const alert = useAlert()
  const [user, setUser] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [ready, setReady] = React.useState(false)


  const refresh = async () => {
    setIsLoading(true)
    try {
      const response = await AuthServices.getAuth()
      setReady(true)

      if (response.data.status !== 200) {
        setUser(null)
        setIsLoading(false)
        return
      }
      setUser(response.data)

    } catch (e) {
      setUser(null)
    }

    setIsLoading(false)
    setReady(true)
  }

  useEffect(() => {
    refresh()
  },[])

  const login = async (model,redirectTo) => {

    const response = await AuthServices.login(model)
    if (response.data.status === 200) {
        localStorage.setItem('token',response.data.token)
        setUser(response.data.user )
        // alert.success('User logged in successfully')
        refresh()

    } else {
      console.log(response.data.error)
    //   alert.error("Invalid Credential")
    }
  }

  const logout = async () => {
    setIsLoading(true)
    AuthServices.logOut()
    setUser(null)
    // alert.success('User logged out successfully')
    navigation.navigate('SignIn');
    setIsLoading(false)
  }


  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, logout, refresh, ready }}
    >
      {children}
    </AuthContext.Provider>
  )
}
