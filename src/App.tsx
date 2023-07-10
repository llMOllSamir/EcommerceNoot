import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import { QueryClient , QueryClientProvider } from 'react-query';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';

function App() {
 const queryClient = new QueryClient() 

let routs = createBrowserRouter([{
     path:"",element:<Layout/>,children:[
    {index :true , element:<Home/>},
    {path :"/" , element:<Home/>},
    {path :"/products" , element:<Products/>},
    {path :"/product/:id" , element:<ProductDetails/>},
    {path :"*" , element:<NotFound/>},
]
}])
  return (
    <>
    <Toaster/> 
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routs} ></RouterProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
