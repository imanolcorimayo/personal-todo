import { useEffect } from "react";

import { setToGlobalStorage } from '../redux/actions'

import { useSelector, useDispatch } from "react-redux";

function getStorageValue(key, defaultValue) {
    
  // getting stored value
  const saved = window.localStorage.getItem(key);
  if (typeof saved === "undefined") return defaultValue
  const initial = JSON.parse(saved);
  return initial || defaultValue;
} 

export const useGlobalStorage = (key, defaultValue) => {
    const keyGlobal = key + "GlobalStorage"
    const actualValue = getStorageValue(keyGlobal, defaultValue);
    const state = useSelector( state => state )
    const returnedValue = useSelector ( state => state[keyGlobal])
    const dispatch=useDispatch()

    // If value doesn't exist on localStorage, save value
    if(actualValue === defaultValue) localStorage.setItem(keyGlobal, JSON.stringify(actualValue))

    // If value doesn't exist on store, dispatch value
    if (!state.hasOwnProperty(keyGlobal)) {
        dispatch(setToGlobalStorage({[keyGlobal]: actualValue}))
    }
  
    useEffect(() => {
        if (typeof returnedValue === "undefined") return localStorage.setItem(keyGlobal, JSON.stringify(null));
        localStorage.setItem(keyGlobal, JSON.stringify(returnedValue));
    }, [key, state, returnedValue, keyGlobal]);
  
    const setValue = (value) => {
    return dispatch(setToGlobalStorage({[keyGlobal]: value}))
    }
    if (state[keyGlobal] && state[keyGlobal][0]) return [state[keyGlobal], setValue]
    return [returnedValue, setValue];
};