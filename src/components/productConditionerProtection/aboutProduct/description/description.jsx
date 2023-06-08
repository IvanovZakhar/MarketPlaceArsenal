import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useCounter from "../../../../hooks/useCounter";
import useFavourites from "../../../../hooks/useFavourites";
import ProductCounter from "../../../productsList/productCounter";
import likeCard from '../../../../resources/img/ico/like-card.svg';
import likeCard__active from '../../../../resources/img/ico/like-card__active.svg';
import './description.scss'


const Description = ({productConditionerProtection}) => {
    const { cartItems, handleAddToCart, handleRemoveFromCart } = useCounter();
    const { favourites, toggleFavourite } = useFavourites();

    const elem = (productConditionerProtection) => {
        const {name_of_product, annotation, price_rubles, price_before_discount, 
            main_photo_link, additional_photo_links, supported_brands, list_of_compatible_devices, purpose} = productConditionerProtection;
 
        const regex = /(https:\/\/.*?\.jpg)/g;
        const matches = [...additional_photo_links.matchAll(regex)].map((match) => ({ url: match[1] }));
 
        const imgs = matches.map((item,i) => {
            return(
                <div key={i}>
                    <img src={item.url} alt={name_of_product}/>
                </div>
        
            )
        })
        const handleToggleFavourite = () => {
            toggleFavourite(productConditionerProtection);
          };
          
        const isFavourite = favourites.some((favourite) => favourite.article === productConditionerProtection.article);

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
                                    item={productConditionerProtection}
                                    cartItems={cartItems}
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                        </div>
                        <div className="definition__description">
                            <div>{annotation}</div>
                            <div className="supports-brend"><span>Предназначение:</span>{purpose}</div>
                            <div className="supports-brend"><span>Список совместимых устройств:</span>{list_of_compatible_devices}</div>
                            <div className="supports-brend"><span>Поддерживаемые бренды:</span>{supported_brands}</div>
                        </div>

                </div>
            </div>
        )
    }
   
    const item = productConditionerProtection ? elem(productConditionerProtection[0]) : null
    return (
       <>
         {item}
       </>
    )
}

export default Description;