import { createBrowserRouter } from 'react-router'; 
import Home from '../pages/Home';
import LayoutNavbar from '../layouts/LayoutNavbar.jsx'
import Products from '../pages/Products.js';
import Carts from '../pages/Carts.js';
import Users from '../pages/Users.js';
export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutNavbar />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'Products',
            element: <Products/>
        },
        {
            path: 'Carts',
            element: <Carts/>
        },
        {
            path: 'Users',
            element: <Users/>
        },
    ]
  },
]);
