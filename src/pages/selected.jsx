import React, {useEffect, useState, useContext} from 'react';
import { Context } from '../Context/savedCardContext';
import { Link, useParams } from 'react-router-dom';
import './selected.scss';
import like from '../assets/svg/like.svg'
import logo from '../assets/img/imagelogo.png'
import korzinkaWhite from '../assets/img/korzinaWhite.png'

const Selected = () => {

    const x = useParams()

    const [fullInfo, setFullInfo] = useState({})

    const {smartphone,saveKorzinka,setKorzinkaLength} = useContext(Context)



    useEffect(() => {
        fetch(`https://my-servesis.herokuapp.com/products/${x.id}`)
        .then(res => res.json())
        .then(result => setFullInfo(result))
    }, []);


    const addKorzinka = (e) => {
        smartphone?.map(i => {
            if (Number(e.target.id) === i.id) {
                saveKorzinka.push(i);
                setKorzinkaLength(saveKorzinka.length)
            }
        })
    }

    const handleAddKuptBtn = (e) => {
        smartphone?.map(item => {
            if (item.id === Number(e)) {
                saveKorzinka.push(item)
                setKorzinkaLength(saveKorzinka.length)
            }
        })
    }


    return (
        <>
        <section className='selected'>
            <div className="container selected__container">
                
                <div className='selected__card'>
                    <img className='selected__like' src={like} alt="" />
                    <img className='selected__card-logo' src={logo} alt="" />
                    <div className='selected__img-wrapper'>
                        <img width="270" height="270" src={fullInfo?.img_link} alt="" />
                        <img width="270" height="270" src={fullInfo?.img_link_2} alt="" />
                        <img width="270" height="270" src={fullInfo?.img_link_3} alt="" />
                        <img width="270" height="270" src={fullInfo?.img_link_4} alt="" />
                        <img width="270" height="270" src={fullInfo?.img_link} alt="" />
                    </div>

                    <div className='selected__text-wrapper'>
                        <h3>
                            {fullInfo.title}
                        </h3>

                        <div className='naushnik__card__price'>
                            <p>{fullInfo?.price} <span>UZS</span></p>
                            <del>{fullInfo?.old_price} <span>UZS</span></del>
                        </div>
                    </div>
                </div>

            <div className='selected__flex'>
                <div className='selected__wrapper'>
                    <div className='selected__card-full-info'>
                        <h3 className='selected__title'>
                            Описание и характеристики
                        </h3>
                        <div className='selected__desc-wrapper'>
                            <p>
                               Year: {fullInfo.characteries?.year}
                            </p>
                            <p>
                               color: {fullInfo.characteries?.color}
                            </p>
                            <p>
                               ves: {fullInfo.characteries?.ves}
                            </p>
                            <p>
                               memory: {fullInfo.characteries?.memory}
                            </p>
                            <p>
                               version: {fullInfo.characteries?.version}
                            </p>
                            <p>
                                {fullInfo?.descreption}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='selected__btn-wrapper'>
                    <Link id={fullInfo.id} onClick={(e) => handleAddKuptBtn(e.target.id)} to={`/korzinka`} className='kupit'>
                        Купить!
                    </Link>

                    <button className='selected__button' id={fullInfo.id} onClick={(e) => addKorzinka(e)}>
                        <img src={korzinkaWhite} alt="" />
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
                
        </section>
        </>
    );
}

export default Selected;
