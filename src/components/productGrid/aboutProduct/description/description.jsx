import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import grid from '../../../../resources/img/products/grid520.png';
import d1 from '../../../../resources/img/products/d1.png';
import likeCard from '../../../../resources/img/ico/like-card.svg';
import CartCard from '../../../../resources/img/ico/cart-card.svg';
import plus from '../../../../resources/img/ico/plus.svg';
import minus from '../../../../resources/img/ico/minus.svg';
import './description.scss'


const Description = ({product}) => {
    
    
    const elem = (product) => {
        const {name_base, anotation, price, price_before, photo_main, photo_aditional} = product
        const regex = /(https:\/\/.*?\.jpg)/g;
        const matches = [...photo_aditional.matchAll(regex)].map((match) => ({ url: match[1] }));
 
        const imgs = matches.map(item => {
            return(
                <div>
                    <img src={item.url} alt={name_base}/>
                </div>
        
            )
        })
        return(
            <div className="description">
            <div className="carousel">
                <Carousel showStatus={false}>
                    <div>
                        <img src={photo_main} alt={name_base}/>
                    </div>
                    {imgs}
                </Carousel>
                <div className='added-panel'>
                    <button className="added-btn">
                        <img src={likeCard} alt='like-product' className='like-product'/>
                        <span>В избранное</span>
                    </button>
          
                </div>
            </div>
            <div className="definition">
                <div className='panel-product'>
                            <div className='price-product'>
                                <h3>Цена</h3>
                                <span className='before-price'>{price_before} ₽</span>
                                <span className='after-price'>{price} ₽</span>
                            </div>
    
                            <div className='count-product'>
                
                                <button>
                                        <img src={minus} alt='minus-product' className='minus-product'/>
                                </button>
                                <span className='count'>4</span>
                                <button>
                                        <img src={plus} alt='plus-product' className='plus-product'/>
                                </button>
                            </div>
                    </div>
                    <div className="definition__description">
                        {anotation.replace(/\<br\/\>/gi, " ")}
                    </div>

            </div>
        </div>
        )
    }
   
    const item = product ? elem(product[0]) : null
    return (
       <>
         {item}
       </>
    )
}

export default Description;