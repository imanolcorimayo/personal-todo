import React, { useEffect } from 'react'

import { useParams } from 'react-router'

import styles from "./styles/Details.module.css"

import { Link } from 'react-router-dom'

// Redux and Router
import { getTask } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import Facultad from '../img/facultad.svg'
import Trabajo from '../img/trabajo.svg'
import Proyectos from '../img/proyectos.svg'
import Salud from '../img/salud.svg'

// Firebase
import { doc, deleteDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Details() {

    const dispatch = useDispatch()
    const { task } = useSelector(state => state)

    const navigate = useNavigate();

    useEffect(() => {
        console.log(task)
    }, [task])

    let { id } = useParams()

    useEffect(()=> {
        dispatch(getTask(id))
    }, [dispatch, id])

    async function setStateTask(e) {

        try {
            await setDoc(doc(db, "tasks", id), {
                ...task,
                stateTask: e.target.name
            })
            navigate("/personal-todo")
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteTask() {
        try {
            await deleteDoc(doc(db, "tasks", id))
            navigate("/personal-todo")
        } catch (error) {
            console.log(error)
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
                <span className={ styles.title }>Title: { task?.title }</span>
                <img className={ styles.img } src={ 
                                    task?.type === "Facultad" ? Facultad : 
                                    task?.type === "Trabajo" ? Trabajo :  
                                    task?.type === "Salud" ? Salud : Proyectos
                                } alt="" />
            </div>
            <div className={ styles.cuerpo }>
                <div className={ styles.decription }>
                    <h2 className={ styles.h2 }>Description</h2>
                    <div className={ styles.descriptionTextDiv }>
                        <p className={ styles.descriptionText }>{ task?.description }</p>
                    </div>
                </div>
                <div className={ styles.buttons }>
                    <button onClick={ setStateTask } name="todo" className={ styles.button + " btn btn-primary"}>To Do</button>
                    <button onClick={ setStateTask } name="doing" className={ styles.button + " btn btn-secondary"}>Doing</button>
                    <button onClick={ setStateTask } name="done" className={ styles.button + " btn btn-success"}>Done</button>
                    <button onClick={ deleteTask } name="done" className={ styles.button + " btn btn-danger"}>Delete</button>
                </div>
            
            </div>
        </div>
    )
}