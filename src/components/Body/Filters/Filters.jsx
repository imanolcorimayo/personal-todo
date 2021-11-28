import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../../../redux/actions'

import styles from './Filters.module.css'

function Filters(props) {

    function runFilter(el){
        props.filter([props.type, el.target.name])
    }

    return (
        <div className={ styles.divPrincipal }>
            <button onClick={ runFilter } name="facultad" className={ styles.button }>Facultad</button>
            <button onClick={ runFilter } name="trabajo" className={ styles.button }>Trabajo</button>
            <button onClick={ runFilter } name="proyectos" className={ styles.button }>Proyectos</button>
            <button onClick={ runFilter } name="salud" className={ styles.button }>Salud</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        type: state.type,
    }
}

function mapDispatchToProps(dispatch){
    return {
        filter: (conditions) => dispatch(filter(conditions))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)