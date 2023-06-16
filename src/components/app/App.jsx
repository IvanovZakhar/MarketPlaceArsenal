
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';
import Cart from '../pages/cart/Cart';
import Favourites from '../pages/favourites/favourites';
import ProductPageGrid from '../pages/ProductPageGrid';
import ProductPageConditionerProtection from '../pages/ProductPageConditionerProtection';
import ProductPageAntiTheft from '../pages/ProductPageAntiTheft';
import ProductPageWoodcutter from '../pages/ProductPageWoodcutter';
import ProductPageBirdHouse from '../pages/ProductPageBirdhouse';
import ProductPagePergola from '../pages/ProductPagePergola';
import ProductPageSwing from '../pages/ProductPageSwing'; 
import ProductPageFlag from '../pages/ProductPageFlag';
import './App.scss';
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
 
      <div className="App">
        <MainPage />
      </div>
   
    ),
  },
  {
    path: "/cart",
    element: <Cart />,
    caseSensitive: false
  },
  {
    path: "/favourites",
    element: <Favourites />,
    caseSensitive: false
  },
  {
    path: "/catalog",
    element: <CatalogPages props={'allproducts'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/grids/grids-one",
    element: <CatalogPages props={'grids-one'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/conditioner-protection/visors",
    element: <CatalogPages props={'visors'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/conditioner-protection/baskets",
    element: <CatalogPages props={'baskets'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/anti-theft",
    element: <CatalogPages props={'anti-theft'}/>,
  },
  {
    path: "/catalog/grids/grids-two",
    element: <CatalogPages props={'grids-two'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/grids",
    element: <CatalogPages props={'grids'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/conditioner-protection",
    element: <CatalogPages props={'conditioner-protection'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/woodcutters",
    element: <CatalogPages props={'woodcutters'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/pergolias",
    element: <CatalogPages props={'pergolias'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/birdhouses",
    element: <CatalogPages props={'birdhouses'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/swings",
    element: <CatalogPages props={'swings'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/flags",
    element: <CatalogPages props={'flags'}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/grids/:artGrid",
    element: <ProductPageGrid props={0}/>,
    caseSensitive: false
  },
  {
    path: "/catalog/grids/grids-one/:artGrid",
    element: <ProductPageGrid  />,
    caseSensitive: false
  },
  {
    path: "/catalog/grids/grids-two/:artGrid",
    element: <ProductPageGrid />,
    caseSensitive: false
  },
  {
    path: "/catalog/conditioner-protection/visors/:artConditionerProtection",
    element: <ProductPageConditionerProtection />,
    caseSensitive: false
  },
  {
    path: "/catalog/conditioner-protection/baskets/:artConditionerProtection",
    element: <ProductPageConditionerProtection />,
        caseSensitive: false
  },
  {
    path: "/catalog/anti-theft/:artAntiTheft",
    element: <ProductPageAntiTheft />,
        caseSensitive: false
  },
  {
    path: "/catalog/woodcutters/:artWoodcutter",
    element: <ProductPageWoodcutter />,
        caseSensitive: false
  },
  {
    path: "/catalog/burdhouses/:artBirdhouse",
    element: <ProductPageBirdHouse />,
        caseSensitive: false
  },
  {
    path: "/catalog/pergolias/:artPergola",
    element: <ProductPagePergola />,
        caseSensitive: false
  },
  {
    path: "/catalog/swings/:artSwing",
    element: <ProductPageSwing />,
        caseSensitive: false
  },
  {
    path: "/catalog/flags/:artFlag",
    element: <ProductPageFlag />,
        caseSensitive: false
  }
 

 
]);


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './CartContext';
// import MainPage from '../pages/MainPage';
// import CatalogPages from '../pages/CatalogPages';
// import Cart from '../pages/cart/Cart';
// import ProductPageGrid from '../pages/ProductPageGrid';
// import ProductPageConditionerProtection from '../pages/ProductPageConditionerProtection';
// import ProductPageAntiTheft from '../pages/ProductPageAntiTheft';
// import ProductPageWoodcutter from '../pages/ProductPageWoodcutter';
// import ProductPageBirdHouse from '../pages/ProductPageBirdhouse';
// import ProductPagePergola from '../pages/ProductPagePergola';
// import ProductPageSwing from '../pages/ProductPageSwing';
 
// import './App.scss';

// const App = () => {
  
//   return (
//     <CartProvider>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="cart" element={<Cart/>} />
//             <Route path="catalog" element={<CatalogPages props={'allproducts'} />} />
//             <Route path="catalog/grids/grids-one" element={<CatalogPages props={'grids-one'} />} />
//             <Route
//               path="catalog/conditioner-protection/visors"
//               element={<CatalogPages props={'visors'} />}
//             />
//             <Route
//               path="catalog/conditioner-protection/baskets"
//               element={<CatalogPages props={'baskets'} />}
//             />
//             <Route path="catalog/anti-theft" element={<CatalogPages props={'anti-theft'} />} />
//             <Route path="catalog/grids/grids-two" element={<CatalogPages props={'grids-two'} />} />
//             <Route path="catalog/grids" element={<CatalogPages props={'grids'} />} />
//             <Route
//               path="/catalog/conditioner-protection"
//               element={<CatalogPages props={'conditioner-protection'} />}
//             />
//             <Route path="/catalog/woodcutters" element={<CatalogPages props={'woodcutters'} />} />
//             <Route path="/catalog/pergolias" element={<CatalogPages props={'pergolias'} />} />
//             <Route path="/catalog/birdhouses" element={<CatalogPages props={'birdhouses'} />} />
//             <Route path="/catalog/swings" element={<CatalogPages props={'swings'} />} />
//             <Route path="/catalog/grids/:artGrid" element={<ProductPageGrid props={0} />} />
//             <Route path="/catalog/grids/grids-one/:artGrid" element={<ProductPageGrid />} />
//             <Route path="/catalog/grids/grids-two/:artGrid" element={<ProductPageGrid />} />
//             <Route
//               path="/catalog/conditioner-protection/visors/:artConditionerProtection"
//               element={<ProductPageConditionerProtection />}
//             />
//             <Route
//               path="/catalog/conditioner-protection/baskets/:artConditionerProtection"
//               element={<ProductPageConditionerProtection />}
//             />
//             <Route
//               path="/catalog/anti-theft/:artAntiTheft"
//               element={<ProductPageAntiTheft />}
//             />
//             <Route
//               path="/catalog/woodcutters/:artWoodcutter"
//               element={<ProductPageWoodcutter />}
//             />
//             <Route path="/catalog/burdhouses/:artBirdhouse" element={<ProductPageBirdHouse />} />
//             <Route path="/catalog/pergolias/:artPergola" element={<ProductPagePergola />} />
//             <Route path="/catalog/swings/:artSwing" element={<ProductPageSwing />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
