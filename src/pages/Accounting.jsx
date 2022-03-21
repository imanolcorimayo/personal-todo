import React, { useState } from 'react'

// Styles, SweetAlert and Bootstrap
import Swal from 'sweetalert2'
import styles from './styles/Accounting.module.css'

// Router
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

// Firebase
import { db } from '../firebase/index'
import { doc, addDoc, collection } from '@firebase/firestore'

// Custom Hooks
import { useGlobalStorage } from '../hook/useGlobalStorage'

export default function Add() {

    const [user,] = useGlobalStorage("user", "")

    const [form, setForm] = useState({
        title: "",
        type: "",
        description: "",
    })

    const navigate = useNavigate()

    async function addTask(ev){
        ev.preventDefault()
        try {
            // const docRef = await addDoc(collection(db, "tasks"), {
            const docRef = await addDoc(collection(doc(db, user.id, "tasks"), "tasks"), {
                ...form,
                stateTask: "todo"
            });
            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                icon: 'success',
                title: 'Success, new task created!',
                showConfirmButton: true,
                timer: 8500
            })
            navigate("/personal-todo")
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Something wrong happened, please try again',
                showConfirmButton: true,
                timer: 8500
            })
            console.error("Error adding document: ", e)
        }
    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.container + ' h-screen'}>
            <div className={'p-2 ' + styles.nav}>
                <h1 className='text-center text-white'>Accounting</h1>
            </div>
            <h2 className='mt-3'>Expenses</h2>
            <div className={ styles.container_data + ' m-auto mb-3' }>
            </div>
            <div>
                <form action="">
                    <span>Title</span>
                    <input type="text" />
                    <span>Type</span>
                    <input type="text" />
                    <span>Count</span>
                    <input type="text" />
                </form>
                <button>Add new expense</button>
            </div>
        </div>
    )
}
