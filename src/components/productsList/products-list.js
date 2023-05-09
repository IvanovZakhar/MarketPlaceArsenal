import {Link } from "react-router-dom";
import { useLinks } from "./Link/Links";
import ModalOrder from "../modal/modalOrder";
import arrowCategories from '../../resources/img/ico/arrow__catalog-menu.svg';
import arrowSort from '../../resources/img/ico/arrow-sort.svg';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import plus from '../../resources/img/ico/plus.svg';
import minus from '../../resources/img/ico/minus.svg';
import './products-list.scss'


const ProductsList = ({product}) => {
   
    const {getLink} = useLinks();
    const elem = product ? product.map(item => {
        const {annotation, article, name_of_product, main_photo_link, price_rubles, price_before_discount, url} = item;
        // const linkProduct =  item.categories.map(item => item.link).join('') 
   
        return (
                <li key={article} className='product' >
                    <img src={main_photo_link} alt={name_of_product} onClick={() => getLink(item.type_, article)}/>
                    <div className='about-product'>
                        <h2 onClick={() => { window.open(`/${url}/${article}`)}}>{name_of_product}</h2>
                        <div className='text__about-product' onClick={() => {console.log(article)}}>{annotation}<div>
              
                        </div>

                    </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>{price_before_discount} ₽</span>
                            <span className='after-price'>{price_rubles} ₽</span>
                        </div>
                        {/* <div className='added-panel'>
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
                        </div> */}
                        <ModalOrder ariaHideApp={false}  product={item}/>
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
 

    // const link = categories.map(item => {
    //     return(
    //      <li key={item.name}> 
    //         <img src={arrowCategories} alt='arrow__catalog-menu'/>
    //         <Link to={`/catalog${item.link}`}>{item.name}</Link>
            
    //     </li>
    //     )
    // })

    // const name = categories.map(item => {
    //     return(
        
    //           <h2 key={item.name}>{item.name}</h2>
      
    //     )
    // })
    return(
        <>
            <ul className='categories'>
                <li>
                    <Link to='/'>Главная</Link>
                </li>
{/*   
                {link} */}
            </ul>
            {/* <div className="categories-name"> 
                {name}
            </div> */}
        </>
    )
}

export default ProductsList;