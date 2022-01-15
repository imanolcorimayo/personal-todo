import React from 'react'
import { auth } from '../firebase/index'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { getTasks, HideModalLogin } from '../redux/actions'

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

        }).catch(error => {
            // Handle Errors here.
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