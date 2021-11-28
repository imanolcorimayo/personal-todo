import React, { useEffect } from 'react'

import { useParams } from 'react-router'

import styles from "./Details.module.css"

import { Link } from 'react-router-dom'
import { getTask, showDoing, showDone, showTodo } from '../../redux/actions'

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
        if(element.target.type === "doing"){
            props.setDoing()
        } else if(element.target.type === "done"){
            props.setDone()
        } else {
            props.setTodo()
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
                    <button onClick={ setShows } type="todo" className={ styles.button + " btn btn-primary"}>To Do</button>
                    <button onClick={ setShows } type="doing" className={ styles.button + " btn btn-secondary"}>Doing</button>
                    <button onClick={ setShows } type="done" className={ styles.button + " btn btn-success"}>Done</button>
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
        setDoing: () => dispatch(showDoing()),
        setDone: () => dispatch(showDone()),
        setTodo: () => dispatch(showTodo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)

