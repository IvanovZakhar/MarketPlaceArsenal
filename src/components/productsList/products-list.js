import {Link} from "react-router-dom";
import arrowCategories from '../../resources/img/ico/arrow__catalog-menu.svg';
import arrowSort from '../../resources/img/ico/arrow-sort.svg';
import grid from '../../resources/img/products/grid520.png';
import d1 from '../../resources/img/products/d1.png';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import plus from '../../resources/img/ico/plus.svg';
import minus from '../../resources/img/ico/minus.svg';
import './products-list.scss'


const ProductsList = ({product}) => {
    console.log(product)
    const elem = product ? product.map(item => {
        const {anotation, artic, name_base, photo_main, price, price_before } = item
        return (
            
                <li key={artic} className='product'>
                    <img src={photo_main} alt='product'/>
                    <div className='about-product'>
                        <h2>{name_base}</h2>
                        <div className='text__about-product'>{anotation}<div>

                        </div>
                    </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>{price_before} ₽</span>
                            <span className='after-price'>{price} ₽</span>
                        </div>
                        <div className='added-panel'>
                            <button>
                                <img src={likeCard} alt='like-product' className='like-product'/>
                            </button>
                            <button>
                                <img src={CartCard} alt='cart-product' className='cart-product'/>
                            </button>
                        </div>
                        <div className='count-product'>
                            <button>
                                    <img src={minus} alt='minus-product' className='minus-product'/>
                            </button>
                            <span className='count'>0</span>
                            <button>
                                    <img src={plus} alt='plus-product' className='plus-product'/>
                            </button>
                        </div>
                    </div>
                </li>
           
        )
    }) : null;

    return(
        <div className='products-list'>
            {product ? <Categories categories={product[0].categories}/>: null}
            <div className='sort_catalog-pages-head'>
                <div>
                    По цене
                    <img src={arrowSort} alt='arrow-sort'/>
                </div>
                <div>
                    По популярности
                    <img src={arrowSort} alt='arrow-sort'/>
                </div>
            </div>
            <ul className='products'>
                {elem}
            </ul>
        </div>
    )
}

const Categories = ({categories}) =>{

    return(
        <>
            <ul className='categories'>
                <li>
                    <Link to='/'>Главная</Link>
                </li>
                    <img src={arrowCategories} alt='arrow__catalog-menu'/>
                <li>
                    <Link to={`/catalog${categories.link}`}>{categories.name}</Link>
                </li>
            </ul>
            <h2>{categories.name}</h2>
        </>
    )
}

export default ProductsList;