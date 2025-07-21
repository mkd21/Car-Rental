
import HomePage from "./components/home/HomePage.jsx";
import CarsPage from "./components/cars/CarsPage.jsx";
import MyBookings from "./components/bookings/MyBookings.jsx";
import SignUp from "./components/signup/SignUpPage.jsx";
import CarDetails from "./components/cars/CarDetails.jsx";

import AppOutlet from "./AppOutlet.jsx";

import OwnerLayout from "./components/owner/OwnerLayout.jsx";

import DashBoard from "./components/owner/DashBoard.jsx";
import AddCar from "./components/owner/AddCar.jsx";
import ManageCar from "./components/owner/ManageCar.jsx";
import ManageBooking from "./components/owner/ManageBooking.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';

function App() {

  const routes = createBrowserRouter([

    {
      path: "/",
      element: <AppOutlet />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/cars",
          element: <CarsPage />
        },
        {
          path: "/car-details/:id",
          element: <CarDetails />
        },
        {
          path: "/my-bookings",
          element: <MyBookings />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
      ]
    },
    {
      path: "/owner",
      element: <OwnerLayout />,
      children: [
        {
          index: true,
          element: <DashBoard />
        },
        {
          path: "add-car",
          element: <AddCar />
        },
        {
          path: "manage-cars",
          element: <ManageCar />
        },
        {
          path: "manage-bookings",
          element: <ManageBooking />
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