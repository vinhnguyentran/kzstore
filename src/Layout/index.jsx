import React from 'react';
import Footer from './Footer';
import './index.scss';
import Header from './Header';
import * as ReactDOM from "react-dom/client";
import HomePage from '../Page/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <div>About</div>
  },
  {
    path: "/product",
    element: <div>Product</div>
  },
  {
    path: "/tech_news",
    element: <div>Tech News</div>
  },

]);
const Layout = () => {

  return (
    <div className='layout'>

      {ReactDOM.createRoot(document.getElementById("root")).render(
        <>
          <Header />
          <React.StrictMode>
            <div className='content'> <RouterProvider router={router} /></div>
          </React.StrictMode>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout;
