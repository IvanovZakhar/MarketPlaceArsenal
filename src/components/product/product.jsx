import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Description from './aboutProduct/description';
import 'react-tabs/style/react-tabs.css';
import './product.scss'

const ProductGrid = () => {
    const selectedTabClassName = "active"
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
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductGrid;