import { useEffect } from 'react';
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';
import useMarketService from '../../services/market-services';
import './App.scss';



function App() {
 
  // const {getAllProducts} = useMarketService()
   
  // useEffect(() => {
  //   getAllProducts()
  // }, [])

  return (
    <div className="App">
        {/* <MainPage/> */}
        <CatalogPages/>
    </div>
  );
}

export default App;
