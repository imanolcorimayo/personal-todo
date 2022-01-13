import React, { useEffect } from 'react'

import styles from './styles/Cards.module.css'

import Facultad from '../img/facultad.svg'
import Trabajo from '../img/trabajo.svg'
import Proyectos from '../img/proyectos.svg'
import Salud from '../img/salud.svg'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { showTodo } from '../redux/actions'

export default function Cards(props) {

    const { tasksShows } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(showTodo())
    },[dispatch])

    return (
        <div className={ styles.divPrincipal }>
            {
                tasksShows?.map((el, i) => {
                    return (
                        <Link key={ "link" + i } className={ styles.link } to={ "Details/" + el.id}>
                            <div key={ "div" + i } className={ styles.card }>
                                <span key={ "span" + i } className={ styles.spanCard }>
                                    {el.title}
                                </span>
                                <img key={"img" + i} className={ styles.img } src={ 
                                    el.type === "Facultad" ? Facultad : 
                                    el.type === "Trabajo" ? Trabajo :  
                                    el.type === "Salud" ? Salud : Proyectos
                                } alt="" />
                            </div>
                        </Link>
                        
                    )
                })
            }
        </div>
    )
}