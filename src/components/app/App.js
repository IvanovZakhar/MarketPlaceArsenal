
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';
import Cart from '../pages/cart/Cart';
import ProductPage from '../pages/ProductPage'
import './App.scss';
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
         <MainPage/>
      </div>
    ),
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "catalog/grids/grids-one",
    element: <CatalogPages props={0}/>,
  },
  {
    path: "catalog/conditioner-protection/visors",
    element: <CatalogPages props={1}/>,
  },
  {
    path: "catalog/conditioner-protection/baskets",
    element: <CatalogPages props={2}/>,
  },
  {
    path: "catalog/anti-theft",
    element: <CatalogPages props={3}/>,
  },
  {
    path: "catalog/grids/grids-two",
    element: <CatalogPages props={4}/>,
  },
  {
    path: "catalog/grids",
    element: <CatalogPages props={5}/>,
  },
  {
    path: "/catalog/conditioner-protection",
    element: <CatalogPages props={6}/>,
  },
  {
    path: "/catalog/grids/grids-one/:productArt",
    element: <ProductPage/>,
  },
  {
    path: "/catalog/grids/grids-two/:productArt",
    element: <ProductPage/>,
  },
 

 
]);


 
// export default App;
