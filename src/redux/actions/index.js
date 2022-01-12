import { GET_TASKS, 
  GET_TASK, 
  ADD_TASK, 
  CHANGE_TO_DOING, 
  CHANGE_TO_DONE, 
  SHOW_TO_DO, 
  SHOW_DOING, 
  SHOW_DONE, 
  CHANGE_TO_TODO, 
  FILTER,
  HIDE_MODAL_LOGIN,
  GLOBAL_LOCAL_STORAGE,
 } from '../constants.js'

// export function getPokemons() {
//     return function(dispatch) {
//       return fetch('http://localhost:3001/pokemons')
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: GET_POKEMONS, payload: json });
//         }).catch(err => console.log(err));
//     };
//   }
  
export function getTasks(payload) {
  return { type: GET_TASKS, payload}
}

export function getTask(payload) {
  return { type: GET_TASK, payload}
}

export function addTask(payload) {
  return { type: ADD_TASK, payload}
}

export function changeToDoing(payload) {
  return { type: CHANGE_TO_DOING, payload}
}

export function changeToDone(payload) {
  return { type: CHANGE_TO_DONE, payload}
}

export function changeToTodo(payload) {
  return { type: CHANGE_TO_TODO, payload}
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