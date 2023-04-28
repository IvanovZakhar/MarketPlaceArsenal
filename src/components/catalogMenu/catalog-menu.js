
import {Link} from "react-router-dom";
import './catalog-menu.scss'
import arrow from '../../resources/img/ico/arrow-yellow.svg';

const CatalogMenu = () => {
    return(
        <ul className='catalog-menu'>
           <li>
                <Link to='/catalog/grids'>
                     Решетки
                    <img src={arrow} className='check__catalog-menu' alt="check"/>
                    <ul className='section__catalog-menu grids'>
                        <li className='subsection__catalog-menu'>
                            <Link className='subsection-link__catalog-menu' to='/catalog/grids/grids-one'>Одностворчатые</Link>
                        </li>
                        <li className='subsection__catalog-menu'>
                            <Link className='subsection-link__catalog-menu' to='/catalog/grids/grids-two'>Двухстворчатые</Link>
                        </li>
                    </ul>
                </Link>

            </li>
            <li>
                <Link  to='/catalog/conditioner-protection'>
                    Защита кондиционера
                    <img src={arrow} className='check__catalog-menu' alt="check"/>
                    <ul className='section__catalog-menu conditioning'>  
                         <li className='subsection__catalog-menu'>
                            <Link to='/catalog/conditioner-protection/visors'>Козырьки</Link>
                        </li>
                        <li className='subsection__catalog-menu'>
                            <Link to='/catalog/conditioner-protection/baskets'>Корзины</Link>
                        </li>
                    </ul>
                </Link>
            </li>

            <li>
                <Link to='/catalog/anti-theft'>Противоугонные устройства</Link>
            </li>
            <li>
                 <a href='/'>Дровницы</a>
            </li>
            <li>
                <a href='/'>Кормушки для птиц</a>
            </li>
            
         
        </ul>
    )
}

export default CatalogMenu;