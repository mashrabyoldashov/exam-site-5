import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/savedCardContext';
import './korzinka.scss';
import delet from '../assets/img/delete.png';
import dostavka from '../assets/img/dostavka.png';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import pustoyKorzinka from '../assets/img/pustoy-korzinka.png'


const Korzinka = () => {
    

    const {saveKorzinka, setSaveKorzinka, setSaveCards, setKorzinkaLength, setSumMoney} = useContext(Context)
    const handleDelete = (id) => {
        setSaveKorzinka(state => state.filter(item => item.id !== id))
        setKorzinkaLength(saveKorzinka.length)
    }
    
    let sumMoney = [];
    
    saveKorzinka?.map(item => {
        let money = Number(item.money) * Number(item.price);
        
        return sumMoney.push(Number(money))
    })
    
    let counters = ""

    if (saveKorzinka.length > 0) {
        counters = sumMoney.reduce(function(a, b) {
            return a + b
        })
    }
    setSumMoney(counters)

    console.log(saveKorzinka);

    const handleIncrement = (e) => {
        let id = Number(e.target.id)
        saveKorzinka?.map(item => {
            if (item.id === id) {
                item.money = Number(item.money) + 1

                if (true) {
                    return setSaveCards(state => [...state])
                }
            }
        })
    }
    const handleDecrement = (e) => {
        let id = Number(e.target.id)
        saveKorzinka?.map(item => {
            if (item.id === id) {
                
                if (item.money > 0) {
                    item.money = Number(item.money) - 1
                } else {
                    item.money = 0
                }

                if (true) {
                    setSaveCards(state => [...state])
                }

                console.log(saveKorzinka);
            }
        })
    }
   

    return (
        <>
            {
                Number(saveKorzinka.length) === 0
                ?
                <>
                    <div className='pustoy__korzinka'>
                        <img width="409" height="315" src={pustoyKorzinka} alt="" />
                        <div>
                        <h1 className='pustoy__korzinka__title'>Корзина пуста</h1>
                        <p className='pustoy__korzinka__desc'>
                           Но это никогда не поздно исправить :)
                        </p>
                        </div>
                        <Link className='pustoy__korzinka__button' to={`/`}>
                            В каталог товаров
                        </Link>
                    </div>
                </>
                :
                <section className='korzinka'>
                <div className="container">
                    <h3 className='korzinka__title'>Корзина</h3>
                    <div className="korzinka__wrapper">
                        <div className="korzinka__cards">
                            {
                                saveKorzinka?.map(k => {
                                    return (
                                        <>
                                            <div key={k.id} className="korzinka__card">
                                                <button onClick={() => handleDelete(k.id)} className='korzinka__delete'>
                                                    <img src={delet} alt="" />
                                                </button>
                                                <div className="korzinka__card__top">
                                                    <img width="146" height="136" src={k.img_link} alt="" />

                                                    <div>
                                                        <h5 className='korzinka__card__title'>
                                                            {k.title}
                                                        </h5>
                                                        <p className='korzinka__card__price'>
                                                            {k.price} UZS
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className='korzinka__card__bottom'>
                                                    <div className='korzinka__card__btn-wrapper'>
                                                        <button id={k.id} onClick={(e) => handleDecrement(e)} className='korzinka__card__minus-btn'>
                                                            -
                                                        </button>
                                                        <span>
                                                            {k.money}
                                                        </span>
                                                        <button id={k.id} onClick={(e) => handleIncrement(e)} className='korzinka__card__plus-btn'>
                                                            +
                                                        </button>
                                                    </div>
                                                    <p className='korzinka__card__price'>
                                                        {k.price} UZS
                                                    </p>
                                                </div>
                                            </div>
                                        </>

                                    )
                                })
                            }

                        <div className="korzinka__card">
                            <h4>Доставка</h4>
                            <YMaps>
                               
                                    <Map width="100%"
                                        defaultState={{
                                            center: [41.311158, 69.279737],
                                            zoom: 6
                                        }}
                                    >
                                        <Placemark geometry={[41.311158, 69.279737]} />
                                    </Map>
                 
                            </YMaps>
                            <div className='korzinka__dostavka'>
                                <div className='korzinka__dostavka__text-warpper'>
                                    <img src={dostavka} alt="" />
                                    <p className='korzinka__dostavka__title'>Доставка курьером</p>
                                </div>
                                <p className='korzinka__card__price'>
                                    {saveKorzinka?.map(i => i.price)} UZS
                                </p>
                            </div>
                        </div>

                        </div>

                        <div className='korzinka__form'>
                            <div className='korzinka__form__wrapper'>
                                <div className='korzinka__form__text-wrapper'>
                                     <h5>
                                         ИТОГО
                                     </h5>
                                     <p className='korzinka__card__price'>
                                         {counters} UZS
                                     </p>
                                </div>
                                <Link to={`/kontak`} className='korzinka__form__button'>
                                    Перейти к оформлению
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }

        </>
    );
}

export default Korzinka;
