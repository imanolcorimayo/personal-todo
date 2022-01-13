import React from "react";

import styles from './styles/Home.module.css'

// Components
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import Menu from "../components/Menu";


import { useSelector } from 'react-redux'



export default function Home() {

    const { type } = useSelector(state => state)

    return (
        <div className={styles.divPrincipal}>
            <div className={styles.barTitle}>
                <h1 className={styles.h1}>{type === "todo" ? "To Do" :
                    type === "doing" ? "Doing" : "Done"}</h1>
                <Menu placement={"end"} name={"end"}></Menu>
            </div>
            <Body></Body>
            <NavBar></NavBar>
        </div>
    )
}