import React, { useEffect } from 'react'

// Styles, Swal and Boostrap
import styles from "./styles/Details.module.css"
import Swal from "sweetalert2"

// Redux and Router
import { useSelector, useDispatch } from 'react-redux'
import { getTask } from '../redux/actions'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Img's
import Facultad from '../img/facultad.svg'
import Trabajo from '../img/trabajo.svg'
import Proyectos from '../img/proyectos.svg'
import Salud from '../img/salud.svg'

// Firebase
import { doc, deleteDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/index'
import { useGlobalStorage } from '../hook/useGlobalStorage'

export default function Details() {

    const dispatch = useDispatch()
    const { task } = useSelector(state => state)

    const [user,] = useGlobalStorage("user", "")

    const navigate = useNavigate();

    useEffect(() => {
        console.log(task)
    }, [task])

    let { id } = useParams()

    useEffect(()=> {
        dispatch(getTask(id, user.id))
        // eslint-disable-next-line
    }, [dispatch, id, user.id])

    async function setStateTask(e) {

        try {
            await setDoc(doc(doc(db, user.id, "tasks"), "tasks", id), {
                ...task,
                stateTask: e.target.name
            })
            Swal.fire({
                icon: 'success',
                title: 'Status was changed succesfully to ' + e.target.name,
                showConfirmButton: true,
                timer: 8500
            })
            navigate("/personal-todo")
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Something wrong happened, please try again',
                showConfirmButton: true,
                timer: 8500
            })
            console.log(error)
        }
    }

    async function deleteTask() {
        const { value: text } = await Swal.fire({
            icon: 'question',
            title: '¿Are you sure that you want delete this task?',
            input: 'text',
            inputLabel: 'We need confirm this action',
            inputPlaceholder: 'Add any word to confirm',
          })

        if (text) {
            try {
                await deleteDoc(doc(doc(db, user.id, "tasks"), "tasks", id))
                Swal.fire({
                    icon: 'success',
                    title: 'Task was deleted successfuly',
                    showConfirmButton: true,
                    timer: 8500
                })
                navigate("/personal-todo")
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Something wrong happened, please try again',
                    showConfirmButton: true,
                    timer: 8500
                })
                console.log(error)
            }
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