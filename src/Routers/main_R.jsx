import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../Layout/EmptyLayout";
import HomePage from "../_Feature/_/Homepage/homepage";
import About from "../_Feature/_/About/About";
import Language from "../_Feature/_/Language/language";

const users = [
    { id: 1, name: "Ahmad" },
    { id: 2, name: "Mohammad" },
    { id: 3, name: "Ali" }
  ];

const router = createBrowserRouter([
    {
        element:<EmptyLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/about",     element:<About/>,     },
            {path:"/language",     element:<Language Arry={users}/>,     },
        ]
    },
]);

// import HomeIcon from '@mui/icons-material/Home';
// export const navItems = [
//     { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
// ];

export default router;