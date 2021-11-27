import React from 'react'

import styles from './NavBar.module.css'

import todo from '../../img/check-square-solid.svg'
import doing from '../../img/snowboarding-solid.svg'
import done from '../../img/th-list-solid.svg'

export default function NavBar() {
    return (
        <div className={ styles.divPrincipal }>
            <div className={ styles.button }>
                <img src={ todo } className={ styles.img } alt="todo" />
                <span className= { styles.span }>To Do</span>
            </div>
            <div className={ styles.button }>
                <img src={ doing } className={ styles.img } alt="doing" />
                <span className= { styles.span }>Doing</span>
            </div>
            <div className={ styles.button }>
                <img src={ done } className={ styles.img } alt="done" />
                <span className= { styles.span }>Done</span>
            </div>
        </div>
    )
}
