import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/index'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { FcGoogle } from 'react-icons/fc'

function GoogleLogin() {
    const [googleUser, setGoogleUser] = useState(null)

    const handleClick = async (e) => {

        e.preventDefault()
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log('google user...', user)
            console.log('access token: ', token)
            setGoogleUser(user)
        }).catch(error => {
            // Handle Errors here.
            console.log(error)
        })

    }

    useEffect(() => {
        const setGoogleLog = async () => {
            if (googleUser !== null) {
                const res = googleUser.providerData[0]
                console.log('userrrrr', res)
                const nameUser = res.displayName.split(' ')
                const newuser = {
                    userName: res.email,
                    firstName: nameUser[0],
                    lastName: nameUser[1],
                    email: res.email,
                    dni: '',
                    password: '',
                    repeatPassword: '',
                    professionalCase: false,
                    professional: "false",
                    city: '',
                    photo: res.photoURL,
                    profession: "",
                    phone: res.phoneNumber ? res.phoneNumber : '',
                    profession: '',
                    verified: googleUser.emailVerified,
                    certification_name: "",
                    certification_img: "",
                    status: "",
                }
            }
        }
        setGoogleLog()

    }, [googleUser])

    return (
        <div
            onClick={handleClick}
            type="button"
            className="btn btn-lg btn-github text-uppercase btn-outline col-lg-4"
        // href="http://localhost:3001/user/auth/github"
        >
            <FcGoogle size="30px" />
        </div>
        
    )
}

export default GoogleLogin