 
import useFavourites from '../../../hooks/useFavourites';
import AppHeader from '../../appHeader/app-header';
import CartMenu from '../../cart-menu/cart-menu';
import Footer from '../../footer/footer';
import FavouritesProducts from '../../favouritesProducts/favourites-products';
import arrowCategories from '../../../resources/img/ico/arrow__catalog-menu.svg';
import Feedback from '../../feedback/feedback';
import { Helmet } from 'react-helmet';
import './favourites.scss'


const Favourites = () => {
    
    const { favourites, toggleFavourite } = useFavourites();
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Избранное</title> 
        </Helmet>
        <AppHeader/>
        <main>
        <div className='container'>
            <div className='row'>
                <div className='col-left__main'>
                    <h1>Избранное({favourites.length})</h1>
                    <CartMenu/>
                </div>
                <div className='col-right__main'>
                    <ul className='categories'>
                        <li>
                            <a href='/'>Главная</a>
                        </li>
                            <img src={arrowCategories} alt='arrow__catalog-menu'/>
                        <li>
                            <a href='/favourites'>Избранное</a>
                        </li>
                    </ul>
                    <FavouritesProducts favourites={favourites} toggleFavourite={toggleFavourite}/>
                </div> 
               
            </div>
            <Feedback/> 
        </div>
        </main>
        <Footer/>
    </>
    )
}

export default Favourites;