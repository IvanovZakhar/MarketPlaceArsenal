import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Description from './aboutProduct/description/description';
import SpecificationsGrid from './aboutProduct/specifications/specifications-grid';
import Configuration from './aboutProduct/configuration/configuration';
import 'react-tabs/style/react-tabs.css';
import './product.scss'


const ProductGrid = ({product}) => {
   
    return(
        <div className="product">
            <h1>{product ? product[0].name_base : null}</h1>
            <Tabs>
                <TabList className="tab-list" >
                    <Tab className="tab" selectedClassName="active">Описание</Tab>
                    <Tab className="tab" selectedClassName="active">Характеристики</Tab>
                    <Tab className="tab" selectedClassName="active">Комплектация</Tab>
                </TabList>

                <TabPanel>
                    <Description product={product}/>
                </TabPanel>
                <TabPanel>
                    <SpecificationsGrid product={product}/>
                </TabPanel>
                <TabPanel>
                    <Configuration product={product}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductGrid;