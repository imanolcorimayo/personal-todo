import React from 'react'

import styles from './Cards.module.css'

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
    ]
    return (
        <div className={ styles.divPrincipal }>
            {
                arr.map((el, i) => {
                    return (
                        <div className={ styles.card }>
                            <span className={ styles.spanCard}>
                                {el.title}
                            </span>
                            <img className={ styles.img } src="" alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
