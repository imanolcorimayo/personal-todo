import { useEffect } from "react";

import { setToGlobalStorage } from '../redux/actions'

import { useSelector, useDispatch } from "react-redux";

function getStorageValue(key, defaultValue) {
    
  // getting stored value
  const saved = localStorage.getItem(key);
  if (typeof saved === "undefined" || saved === "undefined") return defaultValue
  else {
    const initial = JSON.parse(saved);
    return initial || defaultValue
  }
}

export const useGlobalStorage = (key, defaultValue) => {
    const keyGlobal = key + "GlobalStorage"
    const actualValue = getStorageValue(keyGlobal, defaultValue);
    const state = useSelector( state => state )
    const returnedValue = useSelector( state => state[keyGlobal] )
    const dispatch=useDispatch()

    // If value doesn't exist on localStorage, save value
    if(actualValue===defaultValue) localStorage.setItem(keyGlobal, JSON.stringify(actualValue))

    // If value doesn't exist on store, dispatch value
    if (!state.hasOwnProperty(keyGlobal)) {
        dispatch(setToGlobalStorage({[keyGlobal]: actualValue}))
    }
  
    useEffect(() => {
        const stateGlobal = state[keyGlobal]
        if (typeof stateGlobal !== "undefined" && stateGlobal !== "undefined") {
            localStorage.setItem(keyGlobal, JSON.stringify(state[keyGlobal]));
        }
    }, [key, state, keyGlobal, returnedValue]);
  
    const setValue = (value) => {
    return dispatch(setToGlobalStorage({[keyGlobal]: value}))
    }
    if (state[keyGlobal] && state[keyGlobal][0]) return [state[keyGlobal], setValue]
    return [returnedValue, setValue];
};