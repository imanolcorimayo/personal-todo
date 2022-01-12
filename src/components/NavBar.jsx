import React from 'react'

import styles from './styles/NavBar.module.css'

import todo from '../img/check-square-solid.svg'
import doing from '../img/snowboarding-solid.svg'
import done from '../img/th-list-solid.svg'

import  { useDispatch } from 'react-redux'
import { showDoing, showDone, showTodo } from '../redux/actions'

export default function NavBar() {

    const dispatch = useDispatch()

    function modifyingShows(el){
        if(el.target.id==="todo"){
            dispatch(showTodo())
        } else
        if(el.target.id==="doing"){
            dispatch(showDoing())
        } else
        if(el.target.id==="done"){
            dispatch(showDone())
        }

    }

    return (
        <div className={ styles.divPrincipal }>
            <div onClick={ modifyingShows } id="todo" className={ styles.button }>
                <img id="todo" src={ todo } className={ styles.img } alt="todo" />
                <span id="todo" className= { styles.span }>To Do</span>
            </div>
            <div onClick={ modifyingShows } id="doing" className={ styles.button }>
                <img id="doing" src={ doing } className={ styles.img } alt="doing" />
                <span id="doing" className= { styles.span }>Doing</span>
            </div>
            <div onClick={ modifyingShows } id="done" className={ styles.button }>
                <img id="done" src={ done } className={ styles.img } alt="done" />
                <span id="done" className= { styles.span }>Done</span>
            </div>
        </div>
    )
}