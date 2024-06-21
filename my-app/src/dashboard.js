import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function Dashboard(){
    return(
    <div>
        <ul>
            <li>
                <NavLink to="home">Home</NavLink>
            </li>
            <li>
                <NavLink to="about">About</NavLink>
            </li>
            <li>
                <NavLink to="contactUs">ContactUs</NavLink>
            </li>
            <li className="dropdown">
                <NavLink to="college" className="dropbtn">College</NavLink>
                <div className="dropdown-content">
                    <NavLink to="College/teacher">Teacher</NavLink>
                    <NavLink to="College/student">Student</NavLink>
                </div>
            </li>
            <li className="dropdown">
                <NavLink to="book" className="dropbtn">Books</NavLink>
                <div className="dropdown-content">
                            <NavLink to="book/hooks">Hooks</NavLink>
                            <NavLink to="book/typesofcomponnets">Types of components</NavLink>
                            <NavLink to="book/conditionaldemo">Conditional component</NavLink>
                            <NavLink to="book/lifecycle">LifeCycle</NavLink>
                            <NavLink to="book/nestedmapdemo">NestedDemo</NavLink>
                </div>
            </li>
            <li>
                <NavLink to="formDemo">FormDemo</NavLink>
            </li>
            <li>
                <NavLink to="hookForm">hookFormDemo</NavLink>
            </li>

            <li>
                <NavLink to="UnControlled">UnControlled</NavLink>
            </li>
            <li>
                <NavLink to="tabelWithEditDelete">TableWithEditDelete</NavLink>
            </li>
            <li>
                <NavLink to="counter">Counter</NavLink>
            </li>
            <li>
                <NavLink to="spa">SPA Scrollable</NavLink>
            </li>
        
            <li className="logout">
                <NavLink to="/">Logout</NavLink>
            </li>
        </ul>
        <Outlet/>

    </div>);
}