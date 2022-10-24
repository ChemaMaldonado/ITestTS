import React from 'react'
import { useLocation } from 'react-router-dom'
const NavigationState = React.createContext()
const NavigationDispatch = React.createContext()

const NavigationReducer = (state, action) => {
  switch (action.type) {
    case 'routesChanged':
      return {
        pathName: action.payload.pathName,
        color: 'bg-blue-400'
      }
    case 'routesMaintained':
      return {
        ...state,
        color: 'bg-white'
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const NavigationProvider = ({ children }) => {
  const location = useLocation()
  const [state, dispatch] = React.useReducer(NavigationReducer, {
    pathName: '/',
    color: 'bg-white'
  })

  React.useEffect(() => {
    console.log('paths: ', state.pathName, location.pathname)
    if (state.pathName && (state.pathName !== location.pathname)) {
      console.log('here 1')
      return dispatch({ type: 'routesChanged', payload: { pathName: location.pathname } })
    }
    setTimeout(() => {
      return dispatch({ type: 'routesMaintained' })
    }, 250)
  }, [location, state.pathName])

  return (
    <NavigationState.Provider value={state}>
      <NavigationDispatch.Provider value={dispatch}>
        {children}
      </NavigationDispatch.Provider>
    </NavigationState.Provider>
  )
}

const useNavigationState = () => {
  const context = React.useContext(NavigationState)
  if (context === undefined) {
    throw new Error('Navigation context must be used within a provider')
  }
  return context
}

const useNavigationDispatch = () => {
  const context = React.useContext(NavigationDispatch)
  if (context === undefined) {
    throw new Error('Navigation dispatch must be used within a provider')
  }
  return context
}

export { NavigationProvider, useNavigationState, useNavigationDispatch }
