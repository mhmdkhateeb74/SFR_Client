import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../Layout/EmptyLayout";
import HomePage from "../_Feature/_/Homepage/homepage";
import About from "../_Feature/_/About/About";

const router = createBrowserRouter([
    {
        element:<EmptyLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/about",     element:<About/>,     },
        ]
    },
]);

// import HomeIcon from '@mui/icons-material/Home';
// export const navItems = [
//     { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
// ];

export default router;