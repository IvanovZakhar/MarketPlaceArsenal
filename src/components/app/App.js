
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';
import Cart from '../pages/cart/Cart';
import ProductPageGrid from '../pages/ProductPageGrid'
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
    path: "catalog",
    element: <CatalogPages props={0}/>,
  },
  {
    path: "catalog/grids/grids-one",
    element: <CatalogPages props={1}/>,
  },
  {
    path: "catalog/conditioner-protection/visors",
    element: <CatalogPages props={2}/>,
  },
  {
    path: "catalog/conditioner-protection/baskets",
    element: <CatalogPages props={3}/>,
  },
  {
    path: "catalog/anti-theft",
    element: <CatalogPages props={4}/>,
  },
  {
    path: "catalog/grids/grids-two",
    element: <CatalogPages props={5}/>,
  },
  {
    path: "catalog/grids",
    element: <CatalogPages props={6}/>,
  },
  {
    path: "/catalog/conditioner-protection",
    element: <CatalogPages props={7}/>,
  },
  {
    path: "/catalog/grids/:artGrid",
    element: <ProductPageGrid props={0}/>,
  },
  {
    path: "/catalog/grids/grids-one/:artGrid",
    element: <ProductPageGrid props={1}/>,
  },
  {
    path: "/catalog/grids/grids-two/:artGrid",
    element: <ProductPageGrid props={5}/>,
  },
 

 
]);


 
// export default App;
