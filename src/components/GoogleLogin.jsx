import React from 'react'

// Styles, icons, Swal, and bootstrap
import { FcGoogle } from 'react-icons/fc'
import Swal from 'sweetalert2'

// Firebase
import { auth } from '../firebase/index'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Redux and Router
import { getTasks, HideModalLogin } from '../redux/actions'
import { useDispatch } from 'react-redux'

// Custom Hooks
import { useGlobalStorage } from '../hook/useGlobalStorage'

function GoogleLogin() {

    const [, setUser] = useGlobalStorage("user", "")

    const dispatch = useDispatch()

    const handleClick = async (e) => {

        e.preventDefault()
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            const res = user.providerData[0]
            const newUser = {
                id: res.uid,
                userName: res.email,
                name: res.displayName,
                email: res.email,
                photo: res.photoURL,
                phone: res.phoneNumber ? res.phoneNumber : '',
                verified: user.emailVerified,
                token
            }
            dispatch(HideModalLogin(false))
            dispatch(getTasks(res.uid))
            setUser(newUser)
            Swal.fire({
                icon: 'success',
                title: 'You are logged succesfuly, enjoy your tools!',
                showConfirmButton: true,
                timer: 8500
            })
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Something wrong, try again',
                showConfirmButton: true,
                timer: 8500
            })
            console.log(error)
        })

    }

    return (
        <div 
            onClick={handleClick}
            type="button"
            className="d-grid gap-2">
            <button className="btn btn-success"> login with google
                <div
                    className="btn btn-lg btn-github text-uppercase btn-outline col-lg-4"
                >
                    <FcGoogle size="30px" />
                </div>
            </button>
        </div>


    )
}

export default GoogleLogin