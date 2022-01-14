import React, { useEffect } from "react";

import styles from './styles/Home.module.css'

// Components
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import Menu from "../components/Menu";


import { useSelector, useDispatch } from 'react-redux'
import { getTasks, showTodo } from "../redux/actions";
import { useGlobalStorage } from "../hook/useGlobalStorage";



export default function Home() {

    const { type, tasks } = useSelector(state => state)
    const dispatch = useDispatch()

    const [user,] = useGlobalStorage("user", "some")
    
    useEffect(() => {
        dispatch(showTodo())
    }, [tasks, dispatch])


    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    return (
        <div className={styles.divPrincipal}>
            <div className={styles.barTitle}>
                {user ?
                    <div className={styles.barTitle_profile}>
                        <img src={user.photo} alt="img not found" />
                        <span> {user.name}</span>
                    </div> :
                    <>
                        <span>Sign in on menu</span>
                    </>
                }
                <h1 className={styles.h1}>{type === "todo" ? "To Do" :
                    type === "doing" ? "Doing" : "Done"}</h1>
                <Menu placement={"end"} name={"end"}></Menu>
            </div>
            <Body></Body>
            <NavBar></NavBar>
        </div>
    )
}