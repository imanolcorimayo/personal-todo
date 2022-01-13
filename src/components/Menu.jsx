import React, { useState, useEffect } from 'react'

import GoogleLogin from "../components/GoogleLogin"

import s from "./styles/Menu.module.css"

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FiLogIn } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useSelector } from 'react-redux'

export default function Menu({ name, ...props }) {

  const { hideModalLogin } = useSelector(state => state)

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hideModalLogin)
    setShowMenu(hideModalLogin)
  }, [hideModalLogin])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowMenu} className="me-2">
        <GiHamburgerMenu></GiHamburgerMenu>
      </Button>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu of tools</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={ s.container_buttons_below + " d-grid gap-2" }>
            <p>Sign in</p>
            <button className='btn btn-outline-secondary' onClick={handleShow}><FiLogIn size="25px" color="#004D78" /> sign in</button>
            <p>Know developer</p>
            <button className='btn btn-outline-secondary'>Git Hub</button>
            <button className='btn btn-outline-secondary'>LinkedIn</button>
          </div>
          <>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Sign in to get access to functions</Modal.Title>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
