
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './catalog-menu.scss'
import arrow from '../../resources/img/ico/arrow-yellow.svg';

const CatalogMenu = () => {
    const renderTabPanel = false;
    return(
        <ul className='catalog-menu'>
            <Tabs  defaultIndex={-1}>
                
                <TabList className="tab-list__catalog-menu" >
                    <Tab className="tab__catalog-menu" selectedClassName="active">  
                       
                        <Link to='/catalog/grids'>
                            Решетки           
                            <img src={arrow} className='check__catalog-menu' alt="check"/>
                            <ul className='section__catalog-menu grids'>
                                <li className='subsection__catalog-menu'>
                                    <Link className='subsection-link__catalog-menu' to='/catalog/grids/grids-one'>Одностворчатые</Link>
                                </li>
                                <li className='subsection__catalog-menu'>
                                    <Link className='subsection-link__catalog-menu' to='/catalog/grids/grids-two'>Двухстворчатые</Link>
                                </li>
                            </ul>
                        </Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                                     
                        <Link  to='/catalog/conditioner-protection'>
                            Защита кондиционера   
                            <img src={arrow} className='check__catalog-menu' alt="check"/>
                            <ul className='section__catalog-menu conditioning'>  
                                <li className='subsection__catalog-menu'>
                                    <Link to='/catalog/conditioner-protection/visors'>Козырьки</Link>
                                </li>
                                <li className='subsection__catalog-menu'>
                                    <Link to='/catalog/conditioner-protection/baskets'>Корзины</Link>
                                </li>
                            </ul>
                        </Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                      
                        <Link to='/catalog/anti-theft'>  Противоугонные устройства</Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                      
                        <Link to='/catalog/woodcutters'>Дровницы</Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                        
                        <Link to='/catalog/birdhouses'>Кормушки для птиц</Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                        
                        <Link to='/catalog/pergolias'>Перголы</Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                        
                        <Link to='/catalog/swings'>Качели</Link>
                    </Tab>
                    <Tab className="tab__catalog-menu" selectedClassName="active">
                        
                        <Link to='/catalog/flags'>Флагштоки</Link>
                    </Tab>
                      {/* Игнорируем компонент <TabPanel> */}
                </TabList>
                <div style={{ display: 'none' }}>
                    <TabPanel>Содержимое вкладки 1</TabPanel>
                    <TabPanel>Содержимое вкладки 2</TabPanel>
                    <TabPanel>Содержимое вкладки 3</TabPanel>
                    <TabPanel>Содержимое вкладки 4</TabPanel>
                    <TabPanel>Содержимое вкладки 5</TabPanel>
                    <TabPanel>Содержимое вкладки 6</TabPanel>
                    <TabPanel>Содержимое вкладки 7</TabPanel>
                    <TabPanel>Содержимое вкладки 8</TabPanel>
                </div>
      
            </Tabs>
           
        </ul>
    )
}

export default CatalogMenu;