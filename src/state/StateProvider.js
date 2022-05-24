import React, { createContext, useContext, useReducer } from "react"
 
// this is the data layer
export const StateContext = createContext();


// this is a higher oreder component
// the {children} is the <App />
// the reducer listens for chnages
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


// this is ahook that allows information to be retrived from the se data layer 
export const useStateValue = ()=> useContext(StateContext)