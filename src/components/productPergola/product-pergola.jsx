import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductPergola = () => {
   const {artPergola} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productPergola, setPergola] = useState();

    useEffect(() => {
        getProductsForArticle('pergolias', `?article=${artPergola}`).then(setPergola)
 
    }, [artPergola])
    

    return(
        <div className="product">
            <h1>{productPergola ? productPergola[0].name_of_product : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description productPergola={productPergola}/>
                </TabPanel>
                <TabPanel>
                    <Specifications productPergola={productPergola}/>
                </TabPanel>
                <TabPanel>
                    <Configuration productPergola={productPergola}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductPergola;