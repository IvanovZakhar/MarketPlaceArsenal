import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useCounter from "../../../../hooks/useCounter";
import useFavourites from "../../../../hooks/useFavourites";
import ProductCounter from "../../../productsList/productCounter";
import likeCard from '../../../../resources/img/ico/like-card.svg';
import likeCard__active from '../../../../resources/img/ico/like-card__active.svg';
import './description.scss'


const Description = ({productGrid}) => {
    const { cartItems, handleAddToCart, handleRemoveFromCart } = useCounter();
    const { favourites, toggleFavourite } = useFavourites();

    const elem = (productGrid) => {
        const {name_of_product, annotation, price_rubles, price_before_discount, main_photo_link, additional_photo_links} = productGrid;
        const regex = /(https:\/\/.*?\.jpg)/g;
        const matches = [...additional_photo_links.matchAll(regex)].map((match) => ({ url: match[1] }));
 
        const imgs = matches.map(item => {
            return(
                <div>
                    <img src={item.url} alt={name_of_product}/>
                </div>
        
            )
        })

        const handleToggleFavourite = () => {
            toggleFavourite(productGrid);
          };
          
        const isFavourite = favourites.some((favourite) => favourite.article === productGrid.article);

        return(
            <div className="description">
            <div className="carousel">
                <Carousel showStatus={false}>
                    <div>
                        <img src={main_photo_link} alt={name_of_product}/>
                    </div>
                    {imgs}
                </Carousel>
                <div className='added-panel'>
                        <button className="added-btn" onClick={handleToggleFavourite}>
                            <img src={isFavourite ? likeCard__active : likeCard} alt='like-product' className='like-product' />
                            <span>{isFavourite ? 'В избранном': 'В избранное'}</span>
                        </button>
          
                </div>
            </div>
            <div className="definition">
                <div className='panel-product'>
                            <div className='price-product'>
                                <h3>Цена</h3>
                                <span className='before-price'>{price_before_discount} ₽</span>
                                <span className='after-price'>{price_rubles} ₽</span>
                            </div>
    
                            <ProductCounter
                                    item={productGrid}
                                    cartItems={cartItems}
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                    </div>
                    <div className="definition__description">
                        {annotation.replace(/&lt;br\/&gt;&lt;br\/&gt;/g, '')}
                    </div>

            </div>
        </div>
        )
    }
   
    const item = productGrid ? elem(productGrid[0]) : null
    return (
       <>
         {item}
       </>
    )
}

export default Description;