import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './components/auth/sign-in/SignIn';
import SignIn from './components/auth/sign-up/SignUp';
import Error from './components/error/Error';
import UpdateProfile from "./components/My account/profile/Profile.jsx"
import MyAccount from './components/My account/MyAccount.jsx';
import ProtectRoute from './components/protect/Protect';
import TrackMyOrder from './components/header/track-my-order/TrackMyOrder';
import ProductDetail from './components/home/smart-watches/SmartsWatche.jsx';
import CheckForm from './components/checkout/CheckForm';
import OrderComplete from './components/ordercomplete/OrderComplete';
import { ProductProvider } from './components/context/ProductContext';
import { CheckoutProvider } from './components/context/CheckContext';
import EarbudDetail from './components/home/earbud-gallery/EarbudDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "account",
        element: <ProtectRoute> <MyAccount /></ProtectRoute>,
      },
      {
        path: "track-my-order",
        element: <ProtectRoute> <TrackMyOrder /></ProtectRoute>,
      },
      {
        path: "profile",
        element: <ProtectRoute><UpdateProfile /></ProtectRoute>
      },
      {
        path: "watch/:id",
        element: <ProductDetail />
      },
      {
        path: "earbud/:id",
        element: <EarbudDetail />
      },
      {
        path: "checkout",
        element: <CheckForm />
      },
      {
        path: "order-complete",
        element: <OrderComplete />
      }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <CheckoutProvider>
      <RouterProvider router={router} />
    </CheckoutProvider>
  </ProductProvider>  
);