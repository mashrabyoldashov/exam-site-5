import React from 'react';
import './login.scss'

const Login = () => {

    JSON.parse(window.localStorage.getItem('token1'))
    const { adminLogin, setAdminLogin } = useContext(Context)
    const { adminParol, setAdminParol } = useContext(Context)
    const { token, setToken } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (adminLogin == 11112222 && adminParol == "aaaabbbb") {
            setToken("1111")

        } else {
            setToken(undefined)
            alert(" Login or Parol is not defained")
        }
    }

    return (
        <div className='login'>
            <input onChange={e => setAdminLogin(e.target.value)} type="text" />
            <input onChange={e => setAdminParol(e.target.value)} type="text" />
            <button type='submit' onSubmit={e => handleSubmit(e)}>btn</button>
        </div>
    );
}

export default Login;
