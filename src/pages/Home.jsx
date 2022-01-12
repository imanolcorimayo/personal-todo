import React, { useState } from "react";

import styles from './styles/Home.module.css'

// Components
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import GoogleLogin from "../components/GoogleLogin"

import { FiLogIn } from 'react-icons/fi'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";


export default function Home() {

    const { type } = useSelector(state => state)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const dispatch = useDispatch()

    return (
        <div className={styles.divPrincipal}>
            <div className={styles.barTitle}>
                <>
                        <div onClick={handleShow} className={styles.login_icon} >
                            <FiLogIn size="45px" color="#004D78" />
                        </div>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-grid gap-2">
                                <button className="btn btn-success"> login with google <GoogleLogin></GoogleLogin></button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                
                <h1 className={styles.h1 }>{ type === "todo" ? "To Do":
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