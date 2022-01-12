import React from "react";

import styles from './styles/Home.module.css'

// Components
import NavBar from "../components/NavBar";
import Body from "../components/Body";

import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";


export default function Home() {

    const { type } = useSelector(state => state)

    // const dispatch = useDispatch()

    return (
        <div className={ styles.divPrincipal }>
            <div className= { styles.barTitle }>
                <h1 className={ styles.h1 }>{ type === "todo" ? "To Do":
                                            type === "doing" ? "Doing": "Done" }</h1>
                {
                    type === "todo" ? (
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