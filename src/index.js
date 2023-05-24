import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// import {router} from "./components/app/App"
 




// createRoot(document.getElementById("root")).render(
  
//   <RouterProvider router={router} />
// );