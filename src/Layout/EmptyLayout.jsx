import React from 'react';
import {Outlet} from "react-router";
import NavBar from "./NavBar";

function EmptyLayout(props) {
    return (
        <>
             <NavBar/>
            <Outlet />
        </>
    );
}

export default EmptyLayout;