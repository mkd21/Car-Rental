
import HomePage from "./components/home/HomePage.jsx";
import CarsPage from "./components/cars/CarsPage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import ListCars from "./components/list-cars/ListCarsPage.jsx";
import SignUp from "./components/signup/SignUpPage.jsx";

import AppOutlet from "./AppOutlet.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";


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
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/my-bookings",
          element: <ListCars />
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