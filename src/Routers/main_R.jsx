import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../Layout/EmptyLayout";
import HomePage from "../_Feature/_/Homepage/homepage";
import About from "../_Feature/_/About/About";
import Language from "../_Feature/_/Language/language";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import AppLayout from "../Layout/AppLayout";
import Level from "../_Feature/_/Levels/Levels";
import StairsIcon from '@mui/icons-material/Stairs';

const users = [
    { id: 1, name: "Ahmad" },
    { id: 2, name: "Mohammad" },
    { id: 3, name: "Ali" }
  ];

const router = createBrowserRouter([
    {
        element:<AppLayout/>,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/about",     element:<About/>,     },
            {path:"/language",     element:<Language Arry={users}/>,     },
            {path:"/level",     element:<Level/>},
        ]
    },
]);


export const navItems = [
    { name: 'ראשי'    , path: '/'    , icon: <HomeIcon/> },
    { name: 'about'    , path: '/about'    , icon: <InfoIcon/> },
    { name: 'language'    , path: '/language'    , icon: <LanguageIcon/> },
    { name: 'Levels'    , path: '/level'     , icon: <StairsIcon/> },
 ];

export default router;