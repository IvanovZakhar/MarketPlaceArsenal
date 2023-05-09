
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
    element: <CatalogPages props={'allproducts'}/>,
  },
  {
    path: "catalog/grids/grids-one",
    element: <CatalogPages props={'grids-one'}/>,
  },
  {
    path: "catalog/conditioner-protection/visors",
    element: <CatalogPages props={'visors'}/>,
  },
  {
    path: "catalog/conditioner-protection/baskets",
    element: <CatalogPages props={'baskets'}/>,
  },
  {
    path: "catalog/anti-theft",
    element: <CatalogPages props={'anti-theft'}/>,
  },
  {
    path: "catalog/grids/grids-two",
    element: <CatalogPages props={'grids-two'}/>,
  },
  {
    path: "catalog/grids",
    element: <CatalogPages props={'grids'}/>,
  },
  {
    path: "/catalog/conditioner-protection",
    element: <CatalogPages props={'conditioner-protection'}/>,
  },
  {
    path: "/catalog/woodcutters",
    element: <CatalogPages props={'woodcutters'}/>,
  },
  {
    path: "/catalog/pergolias",
    element: <CatalogPages props={'pergolias'}/>,
  },
  {
    path: "/catalog/birdhouses",
    element: <CatalogPages props={'birdhouses'}/>,
  },
  {
    path: "/catalog/swings",
    element: <CatalogPages props={'swings'}/>,
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
