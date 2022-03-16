import React, {useContext} from 'react';
import { Context } from '../Context/savedCardContext';
import star from '../assets/svg/star.svg'
import './like.scss'

const Like = () => {

    const {saveCards} = useContext(Context)

    return (
        <>

            <section className='like'>
                <div className="container">

                    <h3 className='like__title'>Избранное</h3>

                    <div className='naushnik__cards'>
                        {
                            saveCards?.map(c => {
                                return(
                                    <div key={c.id} className='naushnik__card'>
                                       <img width="219" height="237" className='naushnik__card__img' src={c.img_link} alt="" />
                                        <div className="naushnik__card__body">
                                            <h3 className='naushnik__card__title'>
                                                {c.title}
                                            </h3>
                                            
                                            <div className='naushnik__card__price'>
                                            
                                                 <p>{c.price} <span>UZS</span></p>
                                            
                                                 <del>{c.old_price} <span>UZS</span></del>
                                            
                                            </div>
                                        </div>
                                        
                                        <div className="naushnik__reting">
                                            <img width="23" height="21" src={star} alt="" />                                        
                                               <p>                                        
                                                    {c.reting}                                       
                                               </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default Like;
