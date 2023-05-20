import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import AllToys from "../components/AllToys/AllToys";
import AddToy from "../components/AddToy/AddToy";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/viewdetails/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: 'alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: 'addtoy',
          element: <AddToy></AddToy>
        }
      ]
    },
  ]);

  export default router;