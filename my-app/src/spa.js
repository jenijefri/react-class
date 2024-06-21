import React from 'react';
import {BrowserRouter as Router, Outlet} from 'react-router-dom';
import Page1 from "./page1";
import Page2 from "./page2";
import Navbar from "./navbar";

const Spa = () => {
    return (
            <div>
                <Navbar/>
                <div style={{ marginTop: '10px' }}>

                    <Page1 />
                    <Page2 />
                </div>
                <Outlet/>
            
            </div>

    );
};

export default Spa;