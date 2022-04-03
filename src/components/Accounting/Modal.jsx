import React, { useEffect, useState } from 'react'

// Styles, SweetAlert and Bootstrap
import Swal from 'sweetalert2'
import styles from './styles/Modal.module.css'

// Router
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

// Firebase
import { db } from '../../firebase/index'
import { doc, addDoc, collection } from '@firebase/firestore'

// Custom hooks
import { useGlobalStorage } from '../../hook/useGlobalStorage'

export default function Modal() {

    const [user,] = useGlobalStorage("user", "")

    const [form, setForm] = useState({
        title: "",
        types: "",
        count: "",
    })

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(doc(db, user.id, "accounting"), "accounting"), {
                ...form
            });
            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                icon: 'success',
                title: 'Success, new expense created!',
                showConfirmButton: true,
                timer: 8500
            })
            hideModal()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Something wrong happened, please try again',
                showConfirmButton: true,
                timer: 8500
            })
            console.error("Error adding document: ", error)
        }
    }

    function validateForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function hideModal(){
        const modal = document.getElementById('modal-accounting')
        modal.style.top = "-150vh"
    }

    async function addExpense(ev){
    }

    return (
        <div className={ styles.modalContainer } id="modal-accounting">
            <div className={styles.modalBackground} onClick={hideModal} ></div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h3>Add new expense</h3>
                    <span className={ styles.title}>Title</span>
                    <input type="text" name="title" onChange={validateForm} />
                    <span className={ styles.title}>Type</span>
                    <select name="types" id="" onChange={validateForm}>
                        <option value="Expenses" selected>Expenses</option>
                        <option value="Enjoy">Enjoy</option>
                        <option value="Services">Services</option>
                        <option value="Income">Income</option>
                        <option value="Others">Others</option>
                    </select>
                    <span className={ styles.title}>Count</span>
                    <input type="number" name="count" onChange={validateForm} placeholder="$$$" />
                    <button type='submit '>Add new expense</button>
                </form>
            </div>
        </div>
    )
}