import { useEffect } from "react";

import { setToGlobalStorage } from '../redux/actions'

import { useSelector, useDispatch } from "react-redux";

function getStorageValue(key, defaultValue) {
    
  // getting stored value
  console.log("1: ", key, typeof defaultValue)
  const saved = localStorage.getItem(key);
  console.log("2: ", saved)
  if (typeof saved === "undefined") return defaultValue
  else {
    const initial = JSON.parse(saved);
    console.log("3: ", initial)
    return initial || defaultValue
  }
}

export const useGlobalStorage = (key, defaultValue) => {
    const keyGlobal = key + "GlobalStorage"
    const actualValue = getStorageValue(keyGlobal, defaultValue);
    console.log("4: ", actualValue)
    const state = useSelector( state => state )
    console.log("5: ", state)
    const dispatch=useDispatch()

    // If value doesn't exist on localStorage, save value
    if(actualValue===defaultValue) localStorage.setItem(keyGlobal, JSON.stringify(actualValue))

    // If value doesn't exist on store, dispatch value
    if (!state.hasOwnProperty(keyGlobal)) {
        dispatch(setToGlobalStorage({[keyGlobal]: actualValue}))
    }
  
    useEffect(() => {
        const stateGlobal = state[keyGlobal]
        console.log("6: ", stateGlobal)
        if (typeof stateGlobal !== "undefined") {
            localStorage.setItem(keyGlobal, JSON.stringify(state[keyGlobal]));
        }
    }, [key, state, keyGlobal]);
  
    const setValue = (value) => {
    return dispatch(setToGlobalStorage({[keyGlobal]: value}))
    }
    if (state[keyGlobal] && state[keyGlobal][0]) return [state[keyGlobal], setValue]
    return [actualValue, setValue];
};