import { 
    GET_TASKS, 
    GET_TASK, 
    ADD_TASK, 
    SHOW_TO_DO, 
    SHOW_DOING, 
    SHOW_DONE, 
    FILTER,
    HIDE_MODAL_LOGIN,
    GLOBAL_LOCAL_STORAGE,
    RESTORE_STATE,
    GET_ACCOUNTING,
} from '../constants.js'

const initialState = {
    tasks: [],
    tasksShows: [],
    task: {},
    type: "todo",
    hideModalLogin: "",
    accounting: [],
};

function rootReducer(state = initialState, action) {
    
    if (action.type === GET_TASKS) {
        return {
            ...state,
            tasks: action.payload
        }
    } else
    if (action.type === GET_ACCOUNTING) {
        return {
            ...state,
            accounting: action.payload
        }
    } else
    if (action.type === GET_TASK) {
        return {
            ...state,
            task: action.payload,
        }
    } else
    if (action.type === ADD_TASK) {
        
    } else 
    if (action.type === SHOW_TO_DO) {
        let response = state.tasks.filter((el) => {
            return el.stateTask === "todo"
        } )
        return {
            ...state,
            type: "todo",
            tasksShows: response,
        }
    } else 
    if (action.type === SHOW_DOING) {
        let response = state.tasks.filter((el) => el.stateTask+"" === "doing")
        return {
            ...state, 
            type: "doing",
            tasksShows: response,
        }
    } else 
    if (action.type === SHOW_DONE) {
        let response = state.tasks.filter((el) => el.stateTask+"" === "done")
        return {
            ...state, 
            type: "done",
            tasksShows: response,
        }
    } else 
    if(action.type === FILTER) {
        let response = state.tasks.filter( (el) =>{
            return (el.stateTask+"" === ""+action.payload[0]) && (el.type.toLocaleLowerCase()+"" === ""+action.payload[1])
        })
        return {
            ...state,
            tasksShows: response
        }
    } else 
    if(action.type === HIDE_MODAL_LOGIN) {
        return {
            ...state,
            hideModalLogin: action.payload
        }
    } else 
    if(action.type === GLOBAL_LOCAL_STORAGE) {
        return {
            ...state,
            ...action.payload
        }
    } else 
    if(action.type === RESTORE_STATE) {
        return initialState
    }
    return state;
}

export default rootReducer;