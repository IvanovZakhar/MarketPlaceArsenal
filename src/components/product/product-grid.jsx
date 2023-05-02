import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useParams } from "react-router-dom";
import Description from './aboutProduct/description';
import Specifications from './aboutProduct/specifications/specifications';
import 'react-tabs/style/react-tabs.css';
import './product.scss'

const ProductGrid = () => {
    const { productArt }  = useParams();
    console.log(productArt)
    return(
        <div className="product">
            <h1>Решетка на окно раздвижная "Универсал" / Решетка на окно 520x1310</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description/>
                </TabPanel>
                <TabPanel>
                    <Specifications/>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductGrid;