import React from 'react'

import styles from './Filters.module.css'

export default function Filters() {
    return (
        <div className={ styles.divPrincipal }>
            <button className={ styles.button }>Facultad</button>
            <button className={ styles.button }>Trabajo</button>
            <button className={ styles.button }>Proyectos</button>
            <button className={ styles.button }>Salud</button>
        </div>
    )
}
