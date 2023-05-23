import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
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
        <div className="product">
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
    )
}

export default ProductAntiTheft;