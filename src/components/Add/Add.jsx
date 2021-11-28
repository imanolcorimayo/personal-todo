import React from 'react'

import styles from './Add.module.css'

import { Link } from 'react-router-dom'

export default function Add() {

    function addTask(ev){
        ev.preventDefault()
        console.log("holaa")
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
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add title task" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <label htmlFor="exampleDataList" className="form-label">Type of task</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select one..." required/>
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
