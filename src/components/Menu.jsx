import React, { useState, useEffect } from 'react'

// Firebase
import { getAuth, signOut } from 'firebase/auth'

// Components
import GoogleLogin from "../components/GoogleLogin"

// Styles
import s from "./styles/Menu.module.css"
import Swal from 'sweetalert2'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiAddToQueue } from 'react-icons/bi'
import { IoWalletOutline } from 'react-icons/io5'

// Redux and Router
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useGlobalStorage } from '../hook/useGlobalStorage'
import { restoreState } from '../redux/actions'


export default function Menu({ name, ...props }) {

  const [user, setUser] = useGlobalStorage("user", "")

  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    const userConfirmation = auth.currentUser;

    console.log(auth.currentUser)
    console.log(auth)
    console.log(userConfirmation)

    if (!userConfirmation) {
      setUser("")
    }
    // eslint-disable-next-line
  }, [])


  const { hideModalLogin } = useSelector(state => state)

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate()

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hideModalLogin)
    setShowMenu(hideModalLogin)
  }, [hideModalLogin])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function navigates(event){
    if(event.target.id === "add") navigate("/personal-todo/add")
    else navigate("/personal-todo/accounting")
  }

  async function logOut() {
    const auth = getAuth();
    try {
      await signOut(auth)
      Swal.fire({
        icon: 'success',
        title: 'You are logged out succesfuly, I hope see you soon again!',
        showConfirmButton: true,
        timer: 8500
      })
      dispatch(restoreState())
      setUser("")
      setShowMenu(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Something wrong, try again',
        showConfirmButton: true,
        timer: 8500
      })
      console.log(error)
    }

  }

  return (
    <div className={ s.container }>
      <button onClick={handleShowMenu} className="me-2 btn">
        <GiHamburgerMenu size="30px"/>
      </button>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu of tools</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-grid gap-2'>
            <button className='btn btn-outline-success' id="add" onClick={navigates} >
              <BiAddToQueue size="30px"/> Add task
            </button>
          </div>
          <div className='d-grid gap-2 my-1'>
            <button className='btn btn-outline-secondary' id="accounting" onClick={navigates} >
              <IoWalletOutline size="30px"/> Accounting
            </button>
          </div>
          <div className={s.container_buttons_below + " d-grid gap-2"}>
            {
              user ?
                <>
                  <button className='btn btn-outline-secondary' onClick={logOut}><FiLogOut size="25px" color="#004D78" /> sign out</button>
                </> :
                <>
                  <button className='btn btn-outline-secondary' onClick={handleShow}><FiLogIn size="25px" color="#004D78" /> sign in</button>
                </>

            }
            <p>Know developer</p>
            <a className={ s.container_buttons_below_button } href="https://github.com/imanolcorimayo" rel="noreferrer" target="_blank">
              <div className='d-grid gap-2'>
                <button className='btn btn-outline-secondary'>Git Hub</button>
              </div>
            </a>
            <a className={ s.container_buttons_below_button } href="https://www.linkedin.com/in/imanolcorimayo/" rel="noreferrer" target="_blank">
              <div className='d-grid gap-2'>
                <button className='btn btn-outline-secondary'>LinkedIn</button>
              </div>
            </a>
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
    </div>
  )
}
