import React, {useContext} from 'react'; 
import { Context } from '../../Context/savedCardContext';
import likeSvg from '../../assets/svg/like.svg'
import star from '../../assets/svg/star.svg'
import { Link } from 'react-router-dom';


const Products = ({data}) => {

    const {smartphone,setLikeLength,saveCards} = useContext(Context)

    const addSavedCard = (e) => {
        smartphone?.map(i => {
            if (Number(e.target.id) === i.id) {
                saveCards.push(i)
                setLikeLength(saveCards.length)
            } 
        })
    }

    return (
            <section className='naushnik'>
            <div className="container naushnik__container">
                <h2 className='naushnik__title'>
                Продукты
                </h2>

                <div className='naushnik__cards'>
                    {
                        data?.map(s => {
                            return (
                            <>
                                     <div key={new Date().getTime()} className='naushnik__card'>    
                                         <button onClick={(e) => addSavedCard(e)} className='naushnik__likeSvg-btn'>
                                                <img id={s.id} src={likeSvg} alt="" />
                                         </button>

                                            <img width="219" height="237" className='naushnik__card__img' src={s.img_link} alt="" />

                                              <Link className='naushnik__link' to={`/selected/${s.id}`}>
                                                 <div className="naushnik__card__body">
                                                     <h3 className='naushnik__card__title'>
                                                         {s.title}
                                                     </h3>
                                                    <div className='naushnik__card__price'>
                                                         <p>{s.price} <span>UZS</span></p>
                                                         <del>{s.old_price} <span>UZS</span></del>
                                                    </div>
                                                 </div>
                                                 <div className="naushnik__reting">
                                                        <img width="23" height="21" src={star} alt="" />
                                                        <p>
                                                            {s.reting}
                                                        </p>
                                                 </div>
                                                 </Link>
                                             </div>
                                </>           
                            )
                        })
                    }
                </div>
            </div>
        </section>
        
    );
}

export default Products;
