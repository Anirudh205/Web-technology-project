import React from 'react'
import { login } from '../Firebase/config'
import './Login.css'
import { useHistory } from "react-router-dom";


export const Login = () => {
    const history = useHistory();

    const userLogin = () => {
        login().then((data) => {
            console.log(data)   
            history.push("/");
        })
    }

    return (
        <div class="login-area">
            <div class="mid-area">
                <section style={{ fontSize: "40px" }}>Login</section>
                <section><button onClick={() => { userLogin() }}>Sign in with Google</button></section>
            </div>
        </div>
    )


}

//