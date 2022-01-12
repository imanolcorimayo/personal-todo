import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { GiHamburgerMenu } from 'react-icons/gi'

export default function Menu({ name, ...props }) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow} className="me-2">
            <GiHamburgerMenu></GiHamburgerMenu>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu of tools</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            button
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}
