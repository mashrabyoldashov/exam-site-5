import React, {useContext} from 'react';
import { Context } from '../../Context/savedCardContext';
import './login.scss'

const Login = () => {

    JSON.parse(window.localStorage.getItem('token1'))
    const { adminLogin, setAdminLogin } = useContext(Context)
    const { adminParol, setAdminParol } = useContext(Context)
    const { token, setToken } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (adminLogin == 11112222 && adminParol == "aaaabbbb") {
            setToken("OK")
        } else {
            setToken(null)
            alert("Login or Parol is not defained")
        }
        console.log(adminLogin, adminParol);
    }


    return (
        <>
            <section className='login'>
            <div className="container">
                <form action="" className='login__formAdmin'>
                    <input placeholder='password' className='login__password' onChange={e => setAdminLogin(e.target.value)} type="password" required />
                    <input placeholder='parol' className='login__parol' onChange={e => setAdminParol(e.target.value)} type="password" required />
                    <button className='login__btn' type='button' onClick={e => handleSubmit(e)}>Login</button>
                </form>
            </div>
            </section>
        </>
    );
}

export default Login;
