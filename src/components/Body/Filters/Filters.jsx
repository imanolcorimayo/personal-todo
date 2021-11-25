import React from 'react'

import styles from './Filters.module.css'

export default function Filters() {
    return (
        <div className={ styles.divPrincipal }>
            <span className={ styles.span }>Facultad</span>
            <span className={ styles.span }>Trabajo</span>
            <span className={ styles.span }>Proyectos</span>
            <span className={ styles.span }>Salud</span>
        </div>
    )
}
