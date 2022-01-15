import React, { useState } from 'react'

import styles from './styles/Add.module.css'

import { Link } from 'react-router-dom'

import { doc, addDoc, collection } from '@firebase/firestore'

import { db } from '../firebase/index'

import { useNavigate } from 'react-router'
import { useGlobalStorage } from '../hook/useGlobalStorage'

export default function Add() {

    const [user,] = useGlobalStorage("user", "")

    const [form, setForm] = useState({
        title: "",
        type: "",
        description: "",
    })

    const navigate = useNavigate()

    async function addTask(ev){
        ev.preventDefault()
        try {
            // const docRef = await addDoc(collection(db, "tasks"), {
            const docRef = await addDoc(collection(doc(db, user.id, "tasks"), "tasks"), {
                ...form,
                stateTask: "todo"
              });
              console.log("Document written with ID: ", docRef.id);
              navigate("/personal-todo")
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={ styles.divPrincipal }>
            <div className= { styles.barTitle }>
                <Link to="/personal-todo">
                    <span className={ styles.leftArrow }>
                        <i className="fas fa-angle-left"></i>
                    </span>
                </Link>
                <span className={ styles.title }>Add new task</span>
            </div>
            <form onSubmit={ addTask }>
                <div className={ styles.body }>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
                        <input 
                        value={ form.title }
                        name='title'
                        onChange={ handleForm }
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Add title task" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea 
                        value={ form.description }
                        onChange={ handleForm }
                        name='description'
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"></textarea>
                    </div>
                    <label htmlFor="exampleDataList" className="form-label">Type of task</label>
                    <input 
                        onChange={ handleForm }
                        value={form.type}
                        name='type'
                        className="form-control" 
                        list="datalistOptions" 
                        id="exampleDataList" 
                        placeholder="Select one..." 
                        required/>
                    <datalist id="datalistOptions">
                        <option value="Facultad"/>
                        <option value="Trabajo"/>
                        <option value="Proyectos"/>
                        <option value="Salud"/>
                    </datalist>
                    <button type="submit" name="done" className={ styles.button + " btn btn-success"}>Done</button>
                </div>
            </form>
        </div>
    )
}
