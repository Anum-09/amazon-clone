import React, { createContext, useContext, useReducer  } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider vlaue={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
 