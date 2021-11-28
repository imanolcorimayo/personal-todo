import React from 'react'

import styles from './NavBar.module.css'

import todo from '../../img/check-square-solid.svg'
import doing from '../../img/snowboarding-solid.svg'
import done from '../../img/th-list-solid.svg'

import { connect } from 'react-redux'
import { showDoing, showDone, showTodo } from '../../redux/actions'

function NavBar(props) {

    function modifyingShows(el){
        if(el.target.id==="todo"){
            props.showTodo()
        } else
        if(el.target.id==="doing"){
            props.showDoing()
        } else
        if(el.target.id==="done"){
            props.showDone()
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

function mapDispatchToProps(dispatch) {
    return {
        showDoing: () => dispatch(showDoing()),
        showDone: () => dispatch(showDone()),
        showTodo: () => dispatch(showTodo()),
    }
}

export default connect(null, mapDispatchToProps)(NavBar)