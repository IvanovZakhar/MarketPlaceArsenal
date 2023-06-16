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


const ProductConditionerProtection = () => {
   const {artConditionerProtection} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productConditionerProtection, setProductConditionerProtection] = useState();

    useEffect(() => {
       if(artConditionerProtection.length === 12){
        getProductsForArticle('baskets', `?article=${artConditionerProtection}`).then(setProductConditionerProtection)
       }else{
        getProductsForArticle('visors', `?article=${artConditionerProtection}`).then(setProductConditionerProtection)
       }
 
    }, [artConditionerProtection])
    

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{productConditionerProtection ? productConditionerProtection[0].name_of_product : null}</title> 
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
                        <Link to='/catalog/conditioner-protection'>Защита кондиционера</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>

                    {artConditionerProtection.length === 12 ?          
                    <li>
                        <Link to='/catalog/conditioner-protection/baskets'>Корзины</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>:
                    <li>
                        <Link to='/catalog/conditioner-protection/visors'>Защитные козырьки</Link>
                        <img src={arrowCategories} alt='arrow__catalog-menu' />
                    </li>
                    }

                    <li>
                        <Link to='#'>{productConditionerProtection ? productConditionerProtection[0].name_of_product : null}</Link> 
                    </li>
                </ul>
                <h1>{productConditionerProtection ? productConditionerProtection[0].name_of_product : null}</h1>
                <Tabs>
                    <TabList className="tab-list" >
                        <Tab className="tab" selectedClassName="active">Описание</Tab>
                        <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                        <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                    </TabList>

                    <TabPanel>
                        <Description productConditionerProtection={productConditionerProtection}/>
                    </TabPanel>
                    <TabPanel>
                        <Specifications productConditionerProtection={productConditionerProtection}/>
                    </TabPanel>
                    <TabPanel>
                        <Configuration productConditionerProtection={productConditionerProtection}/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default ProductConditionerProtection;