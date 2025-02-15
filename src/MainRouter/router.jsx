import {
  createBrowserRouter,

} from "react-router-dom";

import MainLayOut from "../Layout/MainLayOut";


import Home from "../page/Home/Home";
import LogIn from "../page/UserDetails/LogIn";

import AboutUsPage from "../page/AboutPage/AboutUsPage";
import BiodatasPage from "../page/Biodatas/BiodatasPage";
import ContactUs from "../page/ContactPage/ContactUs";
import Register from "../page/UserDetails/Register";

import EditBiodata from "../page/NormalUserDashboard/EditBiodata";
import ViewBiodata from "../page/NormalUserDashboard/ViewBiodata";
import MyContactRequest from "../page/NormalUserDashboard/MyContactRequest";
import FavouritsBiodata from "../page/NormalUserDashboard/FavouritsBiodata";
import ManageUser from "../page/AdminUserDashboard/ManageUser";
import ApprovedPremium from "../page/AdminUserDashboard/ApprovedPremium";
import ApproveContactReq from "../page/AdminUserDashboard/ApproveContactReq";
import BiodataDetails from "../page/BiodataDetails/BiodataDetails ";
import GotMarried from "../page/NormalUserDashboard/GotMarried";
import Dashboard from "../page/Dashboardlayout/Dashboard";
import Private from "./Private";
import AdminHome from "../page/AdminUserDashboard/AdminHome";
import Checkout from "../page/CheckoutPage/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/biodatas',
        element: <BiodatasPage />
      },
      {
        path: '/about',
        element: <AboutUsPage />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },

      // User Login Register Route 
      {
        path: '/login',
        element: <LogIn />
      },

      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/biodataDetails/:id',
        element:<Private><BiodataDetails/></Private>
      },
      {
        path:'/checkout/:id',
        element:<Private><Checkout/> </Private>
      }
      
 

    ]
  },
  // DeshBoard Route
  {
    path:'/dashboard',
    element:<Private><Dashboard/></Private>,
    children:[
      {
        path:'/dashboard',
        element:<h2>Welcome Your Dashboard </h2>
      },
    // admin User Route
      {
        path:'/dashboard/adminhome',
        element: <AdminHome/>
      },
      {
        path:'/dashboard/manage',
        element:<ManageUser/>
      },
      {
        path:'/dashboard/approved-premium',
        element: <ApprovedPremium/>
      },
      {
        path:'/dashboard/contact-request',
        element:<ApproveContactReq/>

      },
    

      //Normal User Route 
      {
        path:'/dashboard/edit-biodata',
        element:<EditBiodata/>
      },
      {
        path:'/dashboard/view-biodata',
        element: <ViewBiodata/>
      },
      {
        path:'/dashboard/my-contact-request',
        element:<MyContactRequest/>

      },
      {
        path:'/dashboard/favourites-biodata',
        element:<FavouritsBiodata/>
      },
      {
        path:'/dashboard/reviewsAdd',
        element:<GotMarried/>
      }
    ]
  }
]);

export default router