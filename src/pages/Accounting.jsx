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

// Components
import Modal from '../components/Accounting/Modal.jsx'

export default function Accounting() {

    const [user,] = useGlobalStorage("user", "")

    const [form, setForm] = useState({
        title: "",
        type: "",
        count: "",
    })

    const navigate = useNavigate()

    async function addExpense(ev){
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

    function showModal() {
        const modal = document.getElementById('modal-accounting')
        modal.style.top = "0vh"
    }

    return (
        <div className={styles.container}>
            <Modal></Modal>
            <div className={styles.nav}>
                <h1>Accounting</h1>
                <button onClick={showModal}>show modal</button>
            </div>
            <span>Expenses</span>
            <span>Enjoy</span>
            <span>Services</span>
            <span>Others</span>
            <div className={ styles.container_data }>
            </div>
        </div>
    )
}
