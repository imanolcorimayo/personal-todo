import React from 'react'

import styles from './Cards.module.css'

import Facultad from '../../../img/facultad.svg'
import Trabajo from '../../../img/trabajo.svg'
import Proyectos from '../../../img/proyectos.svg'
import Salud from '../../../img/salud.svg'

export default function Cards() {
    let arr = [
        {
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },{
            title: "Instalacion en nueva cordoba",
            type: "Trabajo",
            id: 15,
        },{
            title: "Armar SPA para Rotaract",
            type: "Proyectos",
            id: 15,
        },{
            title: "Correr 20km en 2 Semanas",
            type: "Salud",
            id: 15,
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },
        {
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },{
            title: "Instalacion en nueva cordoba",
            type: "Trabajo",
            id: 15,
        },{
            title: "Armar SPA para Rotaract",
            type: "Proyectos",
            id: 15,
        },{
            title: "Correr 20km en 2 Semanas",
            type: "Salud",
            id: 15,
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },{
            title: "Parcial de álgebra 2",
            type: "Facultad",
            id: 15,
        },
    ]
    return (
        <div className={ styles.divPrincipal }>
            {
                arr.map((el, i) => {
                    return (
                        <div key={ i } className={ styles.card }>
                            <span className={ styles.spanCard }>
                                {el.title}
                            </span>
                            <img className={ styles.img } src={ 
                                el.type === "Facultad" ? Facultad : 
                                el.type === "Trabajo" ? Trabajo :  
                                el.type === "Salud" ? Salud : Proyectos
                             } alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
