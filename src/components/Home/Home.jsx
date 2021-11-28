import React from "react";

import styles from './Home.module.css'

// Components
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";

import { connect } from 'react-redux'

import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className={ styles.divPrincipal }>
            <div className= { styles.barTitle }>
                <h1 className={ styles.h1 }>{ props.type }</h1>
                {
                    props.type === "To Do" ? (
                        <Link to="/personal-todo/add">
                            <span className={ styles.add }>
                                <i className="fas fa-plus-circle"></i>
                            </span>
                        </Link>
                    ): <></>
                }
            </div>
            <Body></Body>
            <NavBar></NavBar>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        type: state.type,
    }
}

export default connect(mapStateToProps, null)(Home)