import React, {useContext} from 'react';
import { Context } from '../../Context/savedCardContext';
import { Link } from 'react-router-dom';
import './header.scss'
import logo from '../../assets/svg/QPICK.svg'
import korzinka from '../../assets/img/korzinka.png'
import like from '../../assets/img/like.png'

const Header = () => {

    const {korzinkaLength,likeLength} = useContext(Context)

    return (
        <header className='header'>
            <div className="container header__container">
                
                <Link to={`/`}>
                  <img className='header__logo' src={logo} alt="logo" />
                </Link>
               
                <div className='header__btn-group'>
                    <Link to={`/like`} className='header__like-btn'>
                        <span className='header__span-1'>{likeLength}</span>
                        <img width="23" height="23" src={like} alt="like" />
                    </Link>

                    <Link to={`/korzinka`} className='header__korzinka-btn'>
                        <span className='header__span-2'>{korzinkaLength}</span>
                        <img width="23" height="23" src={korzinka} alt="korzinka" />
                    </Link>   
                </div>
            </div>
        </header>
    );
}

export default Header;
