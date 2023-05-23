import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
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
        <div className="product">
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
    )
}

export default ProductConditionerProtection;