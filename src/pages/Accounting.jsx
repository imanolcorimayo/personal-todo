import React, { useEffect } from 'react'

// Styles, SweetAlert and Bootstrap
import Swal from 'sweetalert2'
import styles from './styles/Accounting.module.css'

// Router
import { Link } from 'react-router-dom'

// Components
import Modal from '../components/Accounting/Modal.jsx'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAccounting } from "../redux/actions";

// Custom hooks
import { useGlobalStorage } from '../hook/useGlobalStorage'

export default function Accounting() {

    const [user,] = useGlobalStorage("user", "")

    const { accounting } = useSelector(state => state)

    function showModal() {
        const modal = document.getElementById('modal-accounting')
        modal.style.top = "0vh"
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if(user) return dispatch(getAccounting(user.id))
        // eslint-disable-next-line
    }, [dispatch])

    useEffect(() => {
        console.log(accounting)
    }, [accounting])

    return (
        <div className={styles.container}>
            <Modal></Modal>
            <div className={styles.nav}>
                <Link to="/personal-todo">
                    <span className={ styles.leftArrow }>
                        <i className="fas fa-angle-left"></i>
                    </span>
                </Link>
                <h1>Accounting</h1>
                <button onClick={showModal}>new expense</button>
            </div>
            {
                accounting?.map(el => {
                    return (
                        <div className={ styles.item }>
                            <span>{ el.types }</span>
                            <span>{ el.title }</span>
                            <span>{ el.count }</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
