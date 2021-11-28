import React, { useEffect } from 'react'

import styles from './Cards.module.css'

import { connect } from 'react-redux'

import Facultad from '../../../img/facultad.svg'
import Trabajo from '../../../img/trabajo.svg'
import Proyectos from '../../../img/proyectos.svg'
import Salud from '../../../img/salud.svg'

import { Link } from 'react-router-dom'
import { showTodo } from '../../../redux/actions'

function Cards(props) {

    useEffect(()=> {
        props.showTodo()
        // eslint-disable-next-line
    },[])

    return (
        <div className={ styles.divPrincipal }>
            {
                props.tasks?.map((el, i) => {
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

function mapStateToProps(state) {
    return {
        tasks: state.tasksShows,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showTodo: () => dispatch(showTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
