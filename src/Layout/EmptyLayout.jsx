import React from 'react';
import {Outlet} from "react-router";
import {Link} from 'react-router-dom';

function EmptyLayout(props) {
    return (
        <>
            <nav>
            <button><Link  to="/">Homepage</Link></button>
            <button><Link  to="/about">About</Link></button>
            <button> <Link  to="/language">Language</Link></button>
            </nav>
            <Outlet />
        </>
    );
}

export default EmptyLayout;