import React, { useContext } from 'react';
import { Context } from '../Context/savedCardContext';
import Products from './products';
import './main.scss'

const OnlineShop = () => {
    const {smartphone} = useContext(Context)
    return (
        <>
            <Products key={new Date().getTime()} data={smartphone} />
        </>
    );
}

export default OnlineShop;
