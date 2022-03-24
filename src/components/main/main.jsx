import React, {useContext} from 'react';
import { Context } from '../../Context/savedCardContext';
import './main.scss'
import Products from './products';



const Main = () => {

    const {smartphone} = useContext(Context)

    return (
        <>
        <main>
            <Products key={new Date().getTime()} data={smartphone} />
        </main>
        </>
    );
}

export default Main;
