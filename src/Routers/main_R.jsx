import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../Layout/EmptyLayout";
import HomePage from "../_Feature/homepage/homepage";

const router = createBrowserRouter([
    {
        element:<EmptyLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/home",     element:<HomePage />,     },
        ]
    },
]);

// import HomeIcon from '@mui/icons-material/Home';
// export const navItems = [
//     { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
// ];

export default router;