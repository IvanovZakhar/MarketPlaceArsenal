import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowCategories from '../../resources/img/ico/arrow__catalog-menu.svg';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
import { Helmet } from 'react-helmet';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductAntiTheft = () => {
   const {artAntiTheft} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productAntiTheft, setProductAntiTheft] = useState();

    useEffect(() => {
        getProductsForArticle('anti-theft', `?article=${artAntiTheft}`).then(setProductAntiTheft)
    }, [artAntiTheft])
 
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{productAntiTheft ? productAntiTheft[0].name_of_product : null}</title> 
            </Helmet>
            <div className="product">
                <ul className='categories'>
                    <li>
                        <Link to='/'>Главная</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>
                    <li>
                        <Link to='/catalog'>Каталог</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>
                    <li>
                        <Link to='/catalog/anti-theft'>Противоугонные устройства</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>
                    <li>
                        <Link to='#'>{productAntiTheft ? productAntiTheft[0].name_of_product : null}</Link> 
                    </li>
                </ul>
                <h1>{productAntiTheft ? productAntiTheft[0].name_of_product : null}</h1>
                <Tabs>
                    <TabList className="tab-list" >
                        <Tab className="tab" selectedClassName="active">Описание</Tab>
                        <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                        <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                    </TabList>

                    <TabPanel>
                        <Description productAntiTheft={productAntiTheft}/>
                    </TabPanel>
                    <TabPanel>
                        <Specifications productAntiTheft={productAntiTheft}/>
                    </TabPanel>
                    <TabPanel>
                        <Configuration productAntiTheft={productAntiTheft}/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default ProductAntiTheft;