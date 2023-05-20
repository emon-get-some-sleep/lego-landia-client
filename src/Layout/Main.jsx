import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <ScrollRestoration />
        </div>
    );
};

export default Main;