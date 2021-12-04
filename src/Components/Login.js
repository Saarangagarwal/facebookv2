import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result.user)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }

    const anonymousSignIn = () => {
        console.log("attempting anonymous sign in")
        const randomUserId = Math.floor(Math.random() * 9999);
        dispatch({
            type: actionTypes.SET_USER,
            user: {
                "uid": "N6zIhK052tX4de40fdymVj2Pift2",
                "displayName": `User ${randomUserId}`,
                "photoURL": "https://icon-library.com/images/google-user-icon/google-user-icon-16.jpg",
                "email": "anonymoususer@anonymous.com",
                "emailVerified": true,
                "phoneNumber": null,
                "isAnonymous": false,
                "tenantId": null,
                "providerData": [
                    {
                        "uid": "105272067570771661091",
                        "displayName": "Anonymous user",
                        "photoURL": "https://lh3.googleusercontent.com/a/AATXAJzO76bD4jGNRWI6DKx46dFp8OpbhnYjWAHhCk5f=s96-c",
                        "email": "anonymoususer@anonymous.com",
                        "phoneNumber": null,
                        "providerId": "google.com"
                    }
                ],
                "apiKey": "AIzaSyCbBIUHMH-oSEsF4SXF2fAIgR0PjBPL9pI",
                "appName": "[DEFAULT]",
                "authDomain": "facebook-ver2.firebaseapp.com",
                "stsTokenManager": {
                    "apiKey": "AIzaSyCbBIUHMH-oSEsF4SXF2fAIgR0PjBPL9pI",
                    "refreshToken": "AFxQ4_o-jegR_SbIn6SOwD8oSs3v2PGQ-liHSAIzvWsoJmpad4JhOD3EHQqAgi-pvbRbkzt_j53_EIb2tQohLimmGBawdXJGPRSMLoM_vC43TYbLrO3cDO-W_O0KvJJLXNxvg_m4KQ8LDcDJ1R3gNjXTCgK3pViuyJQZT1HY1s_x-pFpk42h3Mk7Y_sJNyNCn-5MRc9oiaVlZc8hHCgg1VnaGsmFwAWGEFEQ1Bh4dNO8UGKhMUiMQkZVFQXtxnI3fuiSBb7knAYMDDEaw_54vA5zDqq5bG6dj-SuvE4AzZ6LX0Y_AugH6zcLV71C1VuUTFbWPEjA_9gpppvXm78Zv286uO7BTUXDSp-j9u617Rucv6UbnU0xptAU2rxkuLskAhVQPrQiZ9BDKuegOwnJC6A7K_gywrfz1w1_MEjtGMeaKlMiW65GID0",
                    "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNTg1Zjk5MjExMmZmODgxMTEzOTlhMzY5NzU2MTc1YWExYjRjZjkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FhcmFuZyBBZ2Fyd2FsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpPNzZiRDRqR05SV0k2REt4NDZkRnA4T3BiaG5ZaldBSGhDazVmPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2ZhY2Vib29rLXZlcjIiLCJhdWQiOiJmYWNlYm9vay12ZXIyIiwiYXV0aF90aW1lIjoxNjM4MTMzMjI4LCJ1c2VyX2lkIjoiTjZ6SWhLMDUydFg0ZGU0MGZkeW1WajJQaWZ0MSIsInN1YiI6Ik42ekloSzA1MnRYNGRlNDBmZHltVmoyUGlmdDEiLCJpYXQiOjE2MzgxMzMyMjgsImV4cCI6MTYzODEzNjgyOCwiZW1haWwiOiJzYWFyYW5nY29kZXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDUyNzIwNjc1NzA3NzE2NjEwOTAiXSwiZW1haWwiOlsic2FhcmFuZ2NvZGVzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.S81P17tB_ZUxNRsyUxNf15Zigqy_Yvxm22SCOXswZfz6ElwUHwdlfsbTBnnGDCBR0C9wsIHVeSCU9uh3B1vEwQisAt_4hzq_ZlMAr4Icgmgk238G-lQ9zo-JiJitLZvpbdbPfCI0x3BDQWNnAeRFWUwQnZwA1clZN1GCA9Ix4uiK2m7m9eyMcEijFyBiT2HJH0S0JsJHatwEQCtGP0LTUDcEseL7w526m0JzWwHKQZrTWVtUBsFtVc75lipuPXJuTz_BSBPxAbLGkfXN0vg8caKIei3ZuLikW_GOT3tal_abbUDkmJbKtCBRcg1bh7Lum5PD4DzwyLsC4IAzkVYTGg",
                    "expirationTime": 2938236828999
                },
                "redirectEventId": null,
                "lastLoginAt": "1638133118668",
                "createdAt": "1638121700048",
                "multiFactor": {
                    "enrolledFactors": []
                }
            }
        })
    }

    

    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="facebook icon from web" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="facebook text"/>
            </div>
            <Button type='submit' onClick={signIn}>Sign in with Google</Button>
            <Button type='submit' onClick={anonymousSignIn}>Sign in anonymously</Button>
            <p3>Note: This is a side project for educational purposes only. There is no intention to affect Facebook or any
                of its related companies. 
            </p3>
        </div>
    )
}

export default Login
