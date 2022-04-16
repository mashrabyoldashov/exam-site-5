import React, {useContext, useState} from 'react';
import { Context } from '../Context/savedCardContext';
import './kontak.scss';
import geo from '../assets/img/geolokatsiya.png'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Link } from 'react-router-dom';

const Kontak = () => {

    const [userCity, setUserCity] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userDom, setUserDom] = useState("")
    const [userPodez, setUserPodez] = useState("")
    const [userKvartira, setUserKvartira] = useState("")
    const [userPhoneNumber, setUserPhoneNumber] = useState("")

    const {setUserData, userData,saveKorzinka,sumMoney} = useContext(Context)

    const getUserData = () => {

        const user = {
            userCity: userCity,
            userLocation: userLocation,
            userDom: userDom,
            userPodez: userPodez,
            userKvartira: userKvartira,
            userPhoneNumber: userPhoneNumber
        }

        setUserData([...userData, user])
        
    }
    


    return (
        <>
        <section className='kontak'>
                <div className="container">

                    <h3 className='kontak__title'>
                        Оформление заказа
                    </h3>
                <form className='kontak__wrapper'>
                
                    <div className='kontak__global-wrapper'>
                        <div className='kontak__text-wrapper'>
                            <p className='kontak__form__title'>
                            Доставка курьером
                            </p>
                            <span className='kontak__form__price'>
                            50000 UZS
                            </span>
                        </div>

                        <YMaps>
                               
                               <Map width="400"
                                   defaultState={{
                                       center: [41.311158, 69.279737],
                                       zoom: 6
                                   }}
                               >
                                   <Placemark geometry={[41.311158, 69.279737]} />
                               </Map>
            
                       </YMaps>

                       <div className='kontak__geo-wrapper'>
                            <img src={geo} alt="" />
                            <p>
                            Адрес доставки
                            </p>
                       </div>

                       <div className='kontak__form'>
                            <select onChange={(e) => setUserCity(e.target.value)} defaultValue="sergeli">
                                <option value="sergeli">Sergeli</option>
                                <option value="yunusobod">Yunusobod</option>
                                <option value="chorsu">Chorsu</option>
                                <option value="qoyliq">Qo'yliq</option>
                                <option value="chilonzor">Chilonzor</option>
                                <option value="chimboy">Chimboy</option>
                            </select>

                            <input required onChange={(e) => setUserLocation(e.target.value)} placeholder='Улица / Район' type="text" />

                            <label className='kontak__form__label'>
                                <input required onChange={(e) => setUserDom(e.target.value)} placeholder='Дом' type="text" />
                                <input required onChange={(e) => setUserPodez(e.target.value)} placeholder='Подъезд' type="text" />
                                <input required onChange={(e) => setUserKvartira(e.target.value)} placeholder='Квартира' type="text" />
                            </label>
                         
                       </div>
                    </div>
        

             <div className='kontak__form-2'>
                        <div className='kontak__form-2__div'>
                            <h2>
                                Ваш заказ
                            </h2>

                           {
                                saveKorzinka?.map(element => {
                                    return (
                                        <>
                                            <div className='kontak__form-2__div-2'>
                                                <span>
                                                    {element.money} x
                                                </span>
                                                <p>
                                                    {element.title}
                                                </p>
                                                <span>
                                                    {sumMoney} UZS
                                                </span>
                                            </div>
                                        </>
                                    )
                                })
                           }

                            <div className='kontak__form-2__div-2'>
     
                                <p>
                                Доставка
                                </p>
                                <span>
                                50000 UZS
                                </span>
                            </div>
                            <div className='kontak__form-2__div-2'>
                            
                                <p>
                                К оплате
                                </p>
                                <span>
                                30000 UZS
                                </span>
                            </div>
                        </div> 

                        <div className='kontak__form-2__div'>
                            <h2>
                            Способ оплаты
                            </h2>

                            <div className='kontak__form-2__div-2'>
                               <label htmlFor="">
                                   <input name="input" type="radio" />
                                   Счет на kaspi.kz
                               </label>
                            </div>
                            <div className='kontak__form-2__div-2'>
                               <label htmlFor="">
                                   <input required name="input" type="radio" />
                                   Есть промокод?
                               </label>
                            </div>                            
                        </div> 

                        <div className='kontak__form-2__div'>
                            <h2>
                            Номер получателя
                            </h2>
                            <input defaultValue="998" required onChange={(e) => setUserPhoneNumber(e.target.value)} className='kontak__form-2__input' placeholder=' __ __ __ __ __' type="number" />
                        </div> 

                        <button onClick={() => getUserData()} type='submit' className='kontak__form-2__button'>
                           <Link className='kontak__form-2__link' to={`/finish`}>
                                Закончить оформление
                           </Link>
                        </button>
            
                    </div>
                </form>
            </div>

        </section>
    
          
        </>
    );
}

export default Kontak;
