import React, { useEffect } from 'react'

import { useParams } from 'react-router'

import styles from "./Details.module.css"

import { Link } from 'react-router-dom'
import { changeToDoing, changeToDone, changeToTodo, getTask } from '../../redux/actions'

import { connect } from 'react-redux'

import Facultad from '../../img/facultad.svg'
import Trabajo from '../../img/trabajo.svg'
import Proyectos from '../../img/proyectos.svg'
import Salud from '../../img/salud.svg'

function Details(props) {

    let { id } = useParams()

    useEffect(()=> {
        props.getTask(id)
        console.log(id, props.task)
        // eslint-disable-next-line
    }, [])

    function setShows(element) {
        if(element.target.name === "doing"){
            props.setDoing(id)
        } else if(element.target.name === "done"){
            props.setDone(id)
        } else {
            props.setTodo(id)
        }
    }

    return (
        <div className={ styles.divPrincipal }>
            <div className= { styles.barTitle }>
                <Link to="/personal-todo">
                    <span className={ styles.leftArrow }>
                        <i className="fas fa-angle-left"></i>
                    </span>
                </Link>
                <span className={ styles.title }>{ props.task[0]?.title }</span>
                <img className={ styles.img } src={ 
                                    props.task[0]?.type === "Facultad" ? Facultad : 
                                    props.task[0]?.type === "Trabajo" ? Trabajo :  
                                    props.task[0]?.type === "Salud" ? Salud : Proyectos
                                } alt="" />
            </div>
            <div className={ styles.cuerpo }>
                <div className={ styles.decription }>
                    <h2 className={ styles.h2 }>Description</h2>
                    <div className={ styles.descriptionTextDiv }>
                        <p className={ styles.descriptionText }>{ props.task[0]?.description }</p>
                    </div>
                </div>
                <div className={ styles.buttons }>
                    <button onClick={ setShows } name="todo" className={ styles.button + " btn btn-primary"}>To Do</button>
                    <button onClick={ setShows } name="doing" className={ styles.button + " btn btn-secondary"}>Doing</button>
                    <button onClick={ setShows } name="done" className={ styles.button + " btn btn-success"}>Done</button>
                </div>
            
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        task: state.task,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTask: (taskId) => dispatch(getTask(taskId)),
        setDoing: (idTask) => dispatch(changeToDoing(idTask)),
        setDone: (idTask) => dispatch(changeToDone(idTask)),
        setTodo: (idTask) => dispatch(changeToTodo(idTask)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)

