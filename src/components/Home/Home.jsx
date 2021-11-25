import React from "react";

import styles from './Home.module.css'

// Components
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";

export default function Home() {
    return (
        <div className={ styles.divPrincipal }>
            <div className= { styles.barTitle }>
                <h1 className={ styles.h1 }>To Do</h1>
            </div>
            <Body></Body>
            <NavBar></NavBar>
        </div>
    )
}