import React from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Outlet } from 'react-router-dom';

export const Layout:React.FC = () => {
    return (
        <div className='container'>
        <Header/>
        <Outlet/>
        <Menu/>
        </div>    
    );
}
