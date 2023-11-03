import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <div className="main-container">
                <div className='menu-container'>
                    <Menu></Menu>
                </div>
                <div className='content-container'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;