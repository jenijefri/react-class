import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'fixed' , marginTop:'50px'}}>
            <ScrollLink to="page1" smooth={true} duration={200} style={{ margin: '0 30px', cursor: 'pointer', color: 'Green', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
                    Page1
                </ScrollLink>
                <ScrollLink to="page2" smooth={true} duration={200} style={{ margin: '0 30px', cursor: 'pointer', color: 'Green', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
                    Page2
                </ScrollLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navbar;