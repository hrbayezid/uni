import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Component/Home/Home';
import Login from '../Component/SignUp/Login';
import SignIn from '../Component/SignUp/SignIn';
import Blogs from '../Component/Home/Blogs/Blogs';
import Cgpa from '../Component/CalculateCgpa/Cgpa';
import AddBlogs from '../Component/Home/Blogs/AddBlogs';
import PrivateRoute from './PrivateRoute';
import Verify from '../Component/Verifypage/Verify';
import DashBoard from '../Component/DashBoard/DashBoard';

import AddNotice from '../Component/DashBoard/Notice/AddNotice';
import AllNoticeCard from '../Component/Home/HomeComponent/Notice/AllNoticeCard';

const router = createBrowserRouter([

    {
        path:"/",
        element:<Main/>,
       
        children:[
           
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signin",
                element:<SignIn/>
            },
            {
                path:"blogs",
                element:<Blogs/>
            },
            {
                path:"Cgpa",
                element:<Cgpa/>
            },
            {
                path:"verify",
                element:<Verify/>
            },
            {
                path:"dashboard",
                element:<DashBoard/>
            },
            
            {
                path:"allnotice",
                element:<AllNoticeCard/>
            },
            {
                   path:"/addblog",
                   element: <PrivateRoute>
                           <AddBlogs/>
                   </PrivateRoute> 
            },
            {
                   path:"/addnotice",
                   element: <PrivateRoute>
                           <AddNotice/>
                   </PrivateRoute> 
            }
           
        ]
    }
]);

export default router;