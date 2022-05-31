import React, { createContext, useContext, useReducer } from "react";

//Prepare data layer
export const DataLayerContext=createContext();

export const DataLayer=({intialState,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue=()=>useContext(DataLayerContext); 