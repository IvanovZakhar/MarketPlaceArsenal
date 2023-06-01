import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useCounter from "../../../../hooks/useCounter";
import useFavourites from "../../../../hooks/useFavourites";
import ProductCounter from "../../../productsList/productCounter";
import likeCard from '../../../../resources/img/ico/like-card.svg';
import likeCard__active from '../../../../resources/img/ico/like-card__active.svg';
import './description.scss'


const Description = ({productFlag}) => {
    const { cartItems, handleAddToCart, handleRemoveFromCart } = useCounter();
    const { favourites, toggleFavourite } = useFavourites();

    const elem = (productFlag) => {
        const {name_of_product, annotation, price_rubles, price_before_discount, 
            main_photo_link, additional_photo_links} = productFlag;
        
        const handleToggleFavourite = () => {
            toggleFavourite(productFlag);
          };
          
        const isFavourite = favourites.some((favourite) => favourite.article === productFlag.article);
        return(
            <div className="description">
                <div className="carousel-slide">
                    <Carousel showStatus={false}>
                        <div>
                            <img src={main_photo_link} alt={name_of_product}/>
                        </div>
                        <div>
                            <img src={additional_photo_links} alt={name_of_product}/>
                        </div>
                    </Carousel>
                    <div className='added-panel'>
                        <button className="added-btn">
                            <img src={isFavourite ? likeCard__active : likeCard} alt='like-product' className='like-product' onClick={handleToggleFavourite}/>
                            <span>{isFavourite ? 'В избранном': 'В избранное'}</span>
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
        
                                <ProductCounter
                                    item={productFlag}
                                    cartItems={cartItems}
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                        </div>
                        <div className="definition__description">
                            <div>{annotation}</div>
                        </div>

                </div>
            </div>
        )
    }
   
    const item = productFlag ? elem(productFlag[0]) : null
    return (
       <>
         {item}
       </>
    )
}

export default Description;