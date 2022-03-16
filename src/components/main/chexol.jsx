import React from 'react';
import chexol1 from '../../assets/img/chexol1.png'
import chexol2 from '../../assets/img/chexol2.png'
import chexol3 from '../../assets/img/chexol3.png'

const Chexol = () => {
    return (
        <section className='chexol'>
            <div className="container chexol__container">
                <h2 className='chexol__title'>
                    Чехолы
                </h2>

                <div className='chexol__cards'>
                    <div className='chexol__card'>
                        <img className='chexol__card__img' src={chexol1} alt="" />
                        <h3 className='chexol__card__title'>
                            Стеклянные
                        </h3>
                    </div>

                    <div className='chexol__card'>
                        <img className='chexol__card__img' src={chexol2} alt="" />
                        <h3 className='chexol__card__title'>
                        Силиконовые
                        </h3>
                    </div>
                    
                    <div className='chexol__card'>
                        <img className='chexol__card__img' src={chexol3} alt="" />
                        <h3 className='chexol__card__title'>
                        Кожаные
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chexol;
