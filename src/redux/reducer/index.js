import { GET_TASKS, GET_TASK, ADD_TASK, CHANGE_TO_DOING, CHANGE_TO_DONE, SHOW_TO_DO, SHOW_DOING, SHOW_DONE, CHANGE_TO_TODO } from '../constants.js'

const initialState = {
    tasks: [
        {
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Instalacion en nueva cordoba",
            type: "Trabajo",
            id: 16,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Armar SPA para Rotaract",
            type: "Proyectos",
            id: 17,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Correr 20km en 2 Semanas",
            type: "Salud",
            id: 18,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 19,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },
        {
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 21,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Instalacion en nueva cordoba",
            type: "Trabajo",
            id: 22,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Armar SPA para Rotaract",
            type: "Proyectos",
            id: 23,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Correr 20km en 2 Semanas",
            type: "Salud",
            id: 24,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 25,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 26,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur totam consectetur eveniet, pariatur repudiandae commodi ipsa reiciendis dolor nihil est dolorem fugit quas. Perspiciatis libero similique animi ipsa fuga.",
            stateTask: "todo",
        },
    ],
    tasksShows: [],
    task: {},
    type: "To Do"
};

function rootReducer(state = initialState, action) {
    
    if (action.type === GET_TASKS) {
        return state
    } else
    if (action.type === GET_TASK) {
        console.log("reducer: ", action.payload)
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
            if(el.id + "" === ""+action.payload) return {...el, stateTask: "todo"}
            return el
        })
        return {
            ...state,
            tasks: response
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
            type: "To Do",
            tasksShows: response,
        }
    } else 
    if (action.type === SHOW_DOING) {
        let response = state.tasks.filter((el) => el.stateTask+"" === "doing")
        return {
            ...state, 
            type: "Doing",
            tasksShows: response,
        }
    } else 
    if (action.type === SHOW_DONE) {
        let response = state.tasks.filter((el) => el.stateTask+"" === "done")
        return {
            ...state, 
            type: "Done",
            tasksShows: response,
        }
    }
    return state;
}

export default rootReducer;