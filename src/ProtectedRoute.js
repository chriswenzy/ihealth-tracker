// import React, { useContext } from 'react'
// import { AuthContext } from './context/Authcontext'


// export const SpecialRoute = ({isPrivate, ...props}) => {
  
//   const { user, isLoading, ready } = useContext(AuthContext)

//   if (!ready) {
//     return null
//   }

//   if (isLoading || !ready) {
//     return null
//   }
  

//   if(user && !isPrivate){
//     return(
//         // props.navigation.navigate('Home')
//         console.log(props)
//     )
//   }else if(!user && isPrivate)
//   {
//     return(
//         // props.navigation.navigate('SignIn')
//         console.log(props)

//       )
//   }else{
//   console.log(props)
//   }

  
// }

// const AuthedRoute = (isPrivate) => (props) => (
//   <SpecialRoute {...{ isPrivate, ...props }} />
// )

// export const InternalRoute = AuthedRoute(true)
// export const ExternalRoute = AuthedRoute(false)
