import React from 'react';
import { Link } from 'react-router-dom';
import qpick from '../../assets/svg/QPICK.svg';
import globus from '../../assets/img/globus.png';
import vk from '../../assets/img/VK.png';
import instagram from '../../assets/img/Instagram.png';
import telegram from '../../assets/img/Telegram.png';
import Whatsap from '../../assets/img/Whatsapp.png';
import './footer.scss'


const Footer = () => {
    return (
        <footer className='footer'>
           <div className="container footer__container">
             <Link to={`/`}>
                 <img src={qpick} alt="" />
             </Link>

             <ul className='footer__list'>
                 <li>
                     <Link className='footer__link' to={`/like`}>Избранное</Link>
                 </li>
                 <li>
                     <Link className='footer__link' to={`/korzinka`}>Корзина</Link>
                 </li>
                 <li>
                     <Link className='footer__link' to={`/kontak`}>Контакты</Link>
                 </li>
             </ul>

             <div className='footer__div'>
                 <p>
                     Условия сервиса
                 </p>

                 <ul className='footer__language-list'>
                     <li>
                         <img src={globus} alt="" />
                     </li>
                     <li>
                         УЗ
                     </li>
                     <li>
                         Рус
                     </li>
                     <li>
                         Eng
                     </li>
                 </ul>
             </div>

             <ul className='footer__net'>
                 <li>
                     <img src={vk} alt="" />
                 </li>
                 <li>
                     <img src={instagram} alt="" />
                 </li>
                 <li>
                     <img src={telegram} alt="" />
                 </li>
                 <li>
                     <img src={Whatsap} alt="" />
                 </li>
            </ul>
        </div>
    </footer>
    );
}

export default Footer;