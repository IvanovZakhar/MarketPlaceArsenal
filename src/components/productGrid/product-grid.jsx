import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarketService from '../../services/market-services';
import Description from './aboutProduct/description/description';
import SpecificationsGrid from './aboutProduct/specifications/specifications-grid';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductGrid = () => {
 
   const [productGrid, setProductGrid] = useState();
   const {artGrid} = useParams()
   const {getProductsForArticle} = useMarketService();

   useEffect(()=>{
        if(artGrid.substring(0, 3) === 'КОМ'){
            getProductsForArticle('grids-two', `?article=${artGrid}`).then(setProductGrid)
        }else{
            getProductsForArticle('grids-one', `?article=${artGrid}`).then(setProductGrid)
        }
   }, [artGrid]) 

    return(
        <div className="product">
            <h1>{productGrid ? productGrid[0].name_of_product : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description productGrid={productGrid}/>
                </TabPanel>
                <TabPanel>
                    <SpecificationsGrid productGrid={productGrid}/>
                </TabPanel>
                <TabPanel>
                    <Configuration productGrid={productGrid}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductGrid;