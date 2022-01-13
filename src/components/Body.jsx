import React from 'react'

import styles from './styles/Body.module.css'

// Components 
import Filters from './Filters'
import Cards from './Cards'

// Firebase
import { db } from '../firebase/index'
import { getDocs, collection } from "firebase/firestore";

export default function Body() {
    async function getAllTasks(){
        const tasksNow = await getDocs(collection(db, "tasks"))
        tasksNow.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
        })
    }

    getAllTasks()
    return (
        <div className={ styles.divPrincipal }>
            <Filters className={ styles.filters }></Filters>
            <Cards></Cards>
        </div>
    )
}
