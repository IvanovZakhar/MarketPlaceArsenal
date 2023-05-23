import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import grid from '../../../../resources/img/products/grid520.png';
import d1 from '../../../../resources/img/products/d1.png';
import likeCard from '../../../../resources/img/ico/like-card.svg';
import CartCard from '../../../../resources/img/ico/cart-card.svg';
import plus from '../../../../resources/img/ico/plus.svg';
import minus from '../../../../resources/img/ico/minus.svg';
import './description.scss'


const Description = ({productPergola}) => {
    
    
    const elem = (productPergola) => {
        const {name_of_product, annotation, price_rubles, price_before_discount, 
            main_photo_link, additional_photo_links, supported_brands, list_of_compatible_devices, purpose} = productPergola;
        
        const regex = /(https:\/\/.*?\.jpg)/g;
        const matches = [...additional_photo_links[0].matchAll(regex)].map((match) => ({ url: match[1] }));
 
        const imgs = matches.map((item,i) => {
            return(
                <div key={i}>
                    <img src={item.url} alt={name_of_product}/>
                </div>
        
            )
        })
        return(
            <div className="description">
                <div className="carousel-slide">
                    <Carousel showStatus={false}>
                        <div>
                            <img src={main_photo_link} alt={name_of_product}/>
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
                                    <span className='before-price'>{price_before_discount ? `${price_before_discount} ₽` : null} </span>
                                    <span className='after-price'>{price_rubles} ₽</span>
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
                            <div>{annotation}</div>
                        </div>

                </div>
            </div>
        )
    }
   
    const item = productPergola ? elem(productPergola[0]) : null
    return (
       <>
         {item}
       </>
    )
}

export default Description;