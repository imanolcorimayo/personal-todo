import { 
    GET_TASKS, 
    GET_TASK, 
    ADD_TASK, 
    CHANGE_TO_DOING, 
    CHANGE_TO_DONE, 
    SHOW_TO_DO, 
    SHOW_DOING, 
    SHOW_DONE, 
    CHANGE_TO_TODO, FILTER,
    HIDE_MODAL_LOGIN,
    GLOBAL_LOCAL_STORAGE, 
} from '../constants.js'

const initialState = {
    tasks: [
        {
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },
    ],
    tasksShows: [],
    task: {},
    type: "todo",
    hideModalLogin: "",
};

function rootReducer(state = initialState, action) {
    
    if (action.type === GET_TASKS) {
        return state
    } else
    if (action.type === GET_TASK) {
        let response= state.tasks.filter((el) => JSON.parse(el.id + "" === ""+action.payload))
        return {
            ...state,
            task: response,
        }
    } else
    if (action.type === ADD_TASK) {
        
    } else
    if (action.type === CHANGE_TO_TODO) {
        let response = state.tasks.map((el) => {
            if(el.id + "" === "" + action.payload) return {...el, stateTask: "todo"}
            return el
        })
        return {
            ...state,
            tasks: response,
        }
    } else
    if (action.type === CHANGE_TO_DOING) {

        let response = state.tasks.map((el) => {
            if(el.id + "" === ""+action.payload) return {...el, stateTask: "doing"}
            return el
        })
        return {
            ...state,
            tasks: response
        }
    } else
    if (action.type === CHANGE_TO_DONE) {
        let response = state.tasks.map((el) => {
            if(el.id + "" === ""+action.payload) return {...el, stateTask: "done"}
            return el
        })
        return {
            ...state,
            tasks: response
        }
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
    } else {
    if(action.type === FILTER) {
        let response = state.tasks.filter( (el) =>{
            return (el.stateTask+"" === ""+action.payload[0]) && (el.type.toLocaleLowerCase()+"" === ""+action.payload[1])
        })
        return {
            ...state,
            tasksShows: response
        }
    }
    if(action.type === HIDE_MODAL_LOGIN) {
        return {
            ...state,
            hideModalLogin: action.payload
        }
    }
    if(action.type === GLOBAL_LOCAL_STORAGE) {
        return {
            ...state,
            ...action.payload
        }
    }
    }
    return state;
}

export default rootReducer;