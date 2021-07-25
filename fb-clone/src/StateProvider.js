import React, { createContext, useContext, useReducer } from "react"
export const StateContext = createContext(); // Preparing data layer

//Wrapping the app inside the state provider and it provide the data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//To pull something from the data layer we user this hook
export const useStateValue = () => useContext(StateContext);