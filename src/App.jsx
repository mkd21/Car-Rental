
import HomePage from "./components/home/HomePage.jsx";
import CarsPage from "./components/cars/CarsPage.jsx";
import MyBookings from "./components/bookings/MyBookings.jsx";
import SignUp from "./components/signup/SignUpPage.jsx";
import CarDetails from "./components/cars/CarDetails.jsx";

import AppOutlet from "./AppOutlet.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import './App.css';

function App() {

  const routes = createBrowserRouter([

    {
      path: "/",
      element: <AppOutlet />,
      children: [
        {
          index : true,
          element: <HomePage />
        },
        {
          path: "/cars",
          element: <CarsPage />
        },
        {
          path : "/car-details/:id",
          element : <CarDetails />
        },
        {
          path: "/my-bookings",
          element: <MyBookings />
        },
        {
          path: "/signup",
          element: <SignUp />
        }
      ]
    }

  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App