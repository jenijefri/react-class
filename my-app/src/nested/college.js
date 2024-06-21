import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function College()
{
    return(
        <div className="style">This is College Component
        <br/>
            <br/>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <NavLink to="teacher">Teacher</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink to="student">Student</NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <Outlet/>
        </div>
    );
}