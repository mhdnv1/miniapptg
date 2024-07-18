import React from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Outlet } from 'react-router-dom';
import Device from '../assets/components/Device/Device';

export const Layout:React.FC = () => {
    return (
        <div className='container'>
        <Device/>
        <Header/>
        <Outlet/>
        <Menu/>
        </div>    
    );
}
