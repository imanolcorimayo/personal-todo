import React from 'react'

import styles from './Add.module.css'

import { Link } from 'react-router-dom'

export default function Add() {
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
            <div className={ styles.body }>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Task title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add title task"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <label for="exampleDataList" class="form-label">Datalist example</label>
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                <datalist id="datalistOptions">
                    <option value="Facultad"/>
                    <option value="Trabajo"/>
                    <option value="Proyectos"/>
                    <option value="Salud"/>
                </datalist>
            </div>
            
        </div>
    )
}
