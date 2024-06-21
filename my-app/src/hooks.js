import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function Hooks(){
    return(<div>
        <ul>
            <li>
                <NavLink to="UseContentDemo">UseContentDemo</NavLink>
            </li>
            <li>
                <NavLink to="UseMemoDemo">UseMemoDemo</NavLink>
            </li>
            <li>
                <NavLink to="UseEffectDemo">UseEffectDemo</NavLink>
            </li>
        </ul>
        <Outlet/>
    </div>);
}