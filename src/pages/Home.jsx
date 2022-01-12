import React, { useState, useEffect } from "react";

import styles from './styles/Home.module.css'

// Components
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import GoogleLogin from "../components/GoogleLogin"
import Menu from "../components/Menu";

import { FiLogIn } from 'react-icons/fi'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";


export default function Home() {

    const { type, hideModalLogin } = useSelector(state => state)

    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        setShow(hideModalLogin)
    }, [hideModalLogin])

    return (
        <div className={styles.divPrincipal}>
            <div className={styles.barTitle}>
                <Menu placement={"end"} name={"end"}></Menu>
                <>
                        <div onClick={handleShow} className={styles.login_icon} >
                            <FiLogIn size="45px" color="#004D78" />
                        </div>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign in to get access to functionts</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <GoogleLogin></GoogleLogin>
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