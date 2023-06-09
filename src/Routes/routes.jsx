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
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/UpdateToy/UpdateToy";
import Notfound from "./Notfound";
import PrivateRoutes from "./PrivateRoutes";
import BlogSection from "../components/BlogSection/BlogSection";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Notfound></Notfound>,
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
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/toys/${params.id}`)
        },
        {
          path: 'alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: 'addtoy',
          element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
        },
        {
          path: 'mytoys',
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: '/update/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/toys/${params.id}`)
        },
        {
          path: 'blog',
          element: <BlogSection></BlogSection>
        }
      ]
    },
  ]);

  export default router;