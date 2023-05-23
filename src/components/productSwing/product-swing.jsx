import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductSwing = () => {
   const {artSwing} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productSwing, setSwing] = useState();

    useEffect(() => {
        getProductsForArticle('swings', `?article=${artSwing}`).then(setSwing)
 
    }, [artSwing])
    

    return(
        <div className="product">
            <h1>{productSwing ? productSwing[0].name_of_product : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description productSwing={productSwing}/>
                </TabPanel>
                <TabPanel>
                    <Specifications productSwing={productSwing}/>
                </TabPanel>
                <TabPanel>
                    <Configuration productSwing={productSwing}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductSwing;