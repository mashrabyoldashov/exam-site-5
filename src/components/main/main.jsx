import React, {useContext} from 'react';
import { Context } from '../../Context/savedCardContext';
import './main.scss'
import Banner from './banner';
import Chexol from './chexol';
import Products from './products';



const Main = () => {

    const {smartphone} = useContext(Context)

    return (
        <>
        <main>
            <Banner />
            <Chexol />
            <Products key={new Date().getTime()} data={smartphone} />
        </main>
        </>
    );
}

export default Main;
