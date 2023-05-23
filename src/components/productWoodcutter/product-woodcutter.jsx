import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import Specifications from './aboutProduct/specifications/specifications';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductWoodcutter = () => {
   const {artWoodcutter} = useParams();
   const {getProductsForArticle} = useMarketService();
   const [productWoodcutter, setWoodcutter] = useState();

    useEffect(() => {
        getProductsForArticle('woodcutters', `?article=${artWoodcutter}`).then(setWoodcutter)
 
    }, [artWoodcutter])
    

    return(
        <div className="product">
            <h1>{productWoodcutter ? productWoodcutter[0].name_of_product : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description productWoodcutter={productWoodcutter}/>
                </TabPanel>
                <TabPanel>
                    <Specifications productWoodcutter={productWoodcutter}/>
                </TabPanel>
                <TabPanel>
                    <Configuration productWoodcutter={productWoodcutter}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductWoodcutter;