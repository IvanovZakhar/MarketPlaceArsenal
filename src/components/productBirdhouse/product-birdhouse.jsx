import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductBirdhouse = () => {
   const {artBirdhouse} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productBirdhouse, setProductBirdhouse] = useState();

    useEffect(() => {
       
        getProductsForArticle('birdhouses', `?article=${artBirdhouse}`).then(setProductBirdhouse)
   
    }, [artBirdhouse])
    

    return(
        <div className="product">
            <h1>{productBirdhouse ? productBirdhouse[0].name_of_product : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description productBirdhouse={productBirdhouse}/>
                </TabPanel>
                <TabPanel>
                    <Specifications productBirdhouse={productBirdhouse}/>
                </TabPanel>
                <TabPanel>
                    <Configuration productBirdhouse={productBirdhouse}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductBirdhouse;