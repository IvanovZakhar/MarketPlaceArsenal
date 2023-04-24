
import MainPage from '../pages/MainPage';
import CatalogPages from '../pages/CatalogPages';

import Cart from '../pages/cart/Cart';
import './App.scss';
import {createBrowserRouter} from "react-router-dom";

// function App() {
 
//   const {getAllProducts} = useMarketService()
   
//   useEffect(() => {
//     getAllProducts()
//   }, [])


//   return router
 
//   return (
//     <div className="App">
    
//         <MainPage/>
   
//     </div>
//   );
// }

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
    path: "catalog/grids-one",
    element: <CatalogPages props={2}/>,
  },
  {
    path: "catalog/grids-two",
    element: <CatalogPages props={4}/>,
  },
  {
    path: "catalog/anti-theft",
    element: <CatalogPages props={2}/>,
  },
]);


 
// export default App;
