import React, {useContext} from 'react';
import { Context } from '../Context/savedCardContext';
import star from '../assets/svg/star.svg';
import saved from '../assets/img/saved.png';
import likee from '../assets/img/likee.png';
import { Link } from 'react-router-dom';
import './like.scss'

const Like = ({data}) => {

    const {saveCards,setSaveCards,setLikeLength} = useContext(Context)

    const deleteLike = (id) => {
        setSaveCards(state => state.filter((item, index) => {
            setLikeLength(index)
            data?.map((item) => item.id !== Number(id) ? item.like = !item.like : null)
            return item.id !== Number(id)
         })
        ) 
    }

    return (
        <>

            {
                Number(saveCards.length) === 0
                ?
                <>
                <div className='pustoy__korzinka'>
                    <img width="409" height="315" src={likee} alt="" />
                    <div>
                    <h1 className='pustoy__korzinka__title'>Избранное пуста</h1>
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
            <section className='like'>
                <div className="container">

                    <h3 className='like__title'>Избранное</h3>

                    <div className='naushnik__cards'>
                        {
                            saveCards?.map(c => {
                                return(
                                    <div key={c.id} className='naushnik__card'>
                                        <button onClick={(e) => deleteLike(e.target.id)} className='naushnik__likeSvg-btn'>
                                            <img id={c.id} src={saved} alt="" />
                                        </button>
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
            }


        </>
    );
}

export default Like;
