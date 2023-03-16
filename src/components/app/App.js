import { useEffect } from 'react';
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';
import useMarketService from '../../services/market-services';
import Cart from '../pages/cart/Cart';
import './App.scss';



function App() {
 
  // const {getAllProducts} = useMarketService()
   
  // useEffect(() => {
  //   getAllProducts()
  // }, [])

  return (
    <div className="App">
        <Cart/>
        {/* <MainPage/> */}
        {/* <CatalogPages/> */}
    </div>
  );
}

export default App;
