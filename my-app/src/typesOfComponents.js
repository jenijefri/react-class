import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function TypesOfComponents(){
    return(<div>
        <ul>
            <li>
                <NavLink to="classcomponnet">Class Component</NavLink>
            </li>
            <li>
                <NavLink to="functioncomponent">Function Component</NavLink>
            </li>
        </ul>
        <Outlet/>
    </div>);
}