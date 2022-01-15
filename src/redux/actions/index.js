// Firebase
import { db } from '../../firebase/index'
import { getDocs, getDoc, collection, doc } from "firebase/firestore";

import { GET_TASKS, 
  GET_TASK, 
  ADD_TASK, 
  SHOW_TO_DO, 
  SHOW_DOING, 
  SHOW_DONE, 
  FILTER,
  HIDE_MODAL_LOGIN,
  GLOBAL_LOCAL_STORAGE,
  RESTORE_STATE,
 } from '../constants.js'

// get tasks data from firebase
export function getTasks(id) {
  return async function (dispatch) {
    try {
      const dataFirebase = await getDocs(collection(doc(db, id,"tasks"),"tasks"))
      const data= [] 
      dataFirebase.forEach(doc => {
        data.push({
          ...doc.data(),
          id: doc.id
        })
      })
      dispatch(
        {
          type: GET_TASKS,
          payload: data,
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
}

export function getTask(id, uid) {
  return async function (dispatch) {
    try {
      const dataFirebase = await getDoc(doc(doc(db, uid, "tasks"), "tasks", id))
      let data;
      if (dataFirebase.exists()) {
        data = dataFirebase.data()
      } else {
        data = "undefined task"
      }

      dispatch({
        type: GET_TASK, 
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function addTask(payload) {
  return { type: ADD_TASK, payload}
}

export function showTodo(payload) {
  return { type: SHOW_TO_DO, payload}
}

export function showDoing(payload) {
  return { type: SHOW_DOING, payload}
}

export function showDone(payload) {
  return { type: SHOW_DONE, payload}
}

export function filter(payload) {
  return { type: FILTER, payload}
}

// funcion para ocultar modal del login cuando loguea
export function HideModalLogin(payload) {
  return { type: HIDE_MODAL_LOGIN, payload}
}

// funcion para manejar datos del localStorage globalmente
export function setToGlobalStorage(data) {
  return {
    type: GLOBAL_LOCAL_STORAGE,
    payload: data,
  };
}

// restore state
export function restoreState() {
  return {
    type: RESTORE_STATE,
    payload: [],
  };
}