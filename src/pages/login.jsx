import React, {useContext} from 'react';
import { Context } from '../Context/savedCardContext';
import './login.scss'

const Login = () => {

    JSON.parse(window.localStorage.getItem('token1'))
    const { adminLogin, setAdminLogin } = useContext(Context)
    const { adminParol, setAdminParol } = useContext(Context)
    const { token, setToken } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (adminLogin == 20030429 && adminParol == "mashrab03") {
            setToken("1111")
        } else {
            setToken(undefined)
            alert("Login or Parol is not defained")
        }
    }

    return (
        <>
            <section className='login'>
            <div className="container">
                <form action="" className='login__formAdmin'>
                    <input placeholder='password' className='login__password' onChange={e => setAdminLogin(e.target.value)} type="number" required />
                    <input placeholder='parol' className='login__parol' onChange={e => setAdminParol(e.target.value)} type="text" required />
                    <button className='login__btn' type='submit' onSubmit={e => handleSubmit(e)}>Login</button>
                </form>
            </div>
            </section>
        </>
    );
}

export default Login;
