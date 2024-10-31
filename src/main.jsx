import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Product from './component/Product/Product';
import Details from './component/Details/Details';
import Post from './component/Post/Post';
import Error from './component/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
     {
      path: "/about",
      element: <About></About>
     },
     {
      path: "/product",
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Product></Product>
     },
     {
      path: "/product/:productid",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments?id=${params.productid}`),
      element: <Details></Details>
     },
     {
      path:"/post/:postId",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`),
      element: <Post></Post>
     },
   ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
