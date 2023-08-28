import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function AppContextProvider({children}) {
  
  return (
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext