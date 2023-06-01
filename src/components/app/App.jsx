
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
    path: "cart",
    element: <Cart />,
  },
  {
    path: "favourites",
    element: <Favourites />,
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
    path: "/catalog/flags",
    element: <CatalogPages props={'flags'}/>,
  },
  {
    path: "/catalog/grids/:artGrid",
    element: <ProductPageGrid props={0}/>,
  },
  {
    path: "/catalog/grids/grids-one/:artGrid",
    element: <ProductPageGrid  />,
  },
  {
    path: "/catalog/grids/grids-two/:artGrid",
    element: <ProductPageGrid />,
  },
  {
    path: "/catalog/conditioner-protection/visors/:artConditionerProtection",
    element: <ProductPageConditionerProtection />,
  },
  {
    path: "/catalog/conditioner-protection/baskets/:artConditionerProtection",
    element: <ProductPageConditionerProtection />,
  },
  {
    path: "/catalog/anti-theft/:artAntiTheft",
    element: <ProductPageAntiTheft />,
  },
  {
    path: "/catalog/woodcutters/:artWoodcutter",
    element: <ProductPageWoodcutter />,
  },
  {
    path: "/catalog/burdhouses/:artBirdhouse",
    element: <ProductPageBirdHouse />,
  },
  {
    path: "/catalog/pergolias/:artPergola",
    element: <ProductPagePergola />,
  },
  {
    path: "/catalog/swings/:artSwing",
    element: <ProductPageSwing />,
  },
  {
    path: "/catalog/flags/:artFlag",
    element: <ProductPageFlag />,
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
