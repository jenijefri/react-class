import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function Book(){
    return(<div className="style">
        {/*<ul>*/}
        {/*    <li>*/}
        {/*        <NavLink to="hooks">Hooks</NavLink>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <NavLink to="typesofcomponnets">Types of components</NavLink>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <NavLink to="conditionaldemo">Conditional component</NavLink>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <NavLink to="lifecycle">LifeCycle</NavLink>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <NavLink to="nestedmapdemo">NestedDemo</NavLink>*/}
        {/*    </li>*/}
        {/*</ul>*/}
        <Outlet/>
    </div>);
}