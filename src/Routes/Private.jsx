import React, { useContext } from 'react';
import { Context } from '../Context/savedCardContext';
import Admin from '../pages/admin';
import Login from '../pages/login';

const Private = () => {
    const {token, setToken} = useContext(Context)
    
    if(token) {
        return <Admin />
    } else {
        return <Login />
    }
}

export default Private;
