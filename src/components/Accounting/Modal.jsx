import React, { useState } from 'react'

// Styles, SweetAlert and Bootstrap
import styles from './styles/Modal.module.css'

// Firebase
/* import { db } from '../firebase/index'
import { doc, addDoc, collection } from '@firebase/firestore' */

export default function Modal() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    function validateForm(e){
        console.log(e.target.value)
        console.log(e.target.name)
    }

    function hideModal(){
        const modal = document.getElementById('modal-accounting')
        modal.style.top = "-150vh"
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