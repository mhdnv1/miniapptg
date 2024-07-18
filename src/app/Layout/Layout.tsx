import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Outlet } from 'react-router-dom';
export const Layout:React.FC = () => {
    const [isTelegramMobile, setIsTelegramMobile] = useState<boolean>(false);
    useEffect(() => {
        if ((window as any).Telegram && (window as any).Telegram.WebApp) {
          const tg = (window as any).Telegram.WebApp;
          if (tg && tg.initDataUnsafe) {
            setIsTelegramMobile(tg.initDataUnsafe.platform === 'mobile');
          }
        }
      }, []);
    return (
        <>
        {
            isTelegramMobile ? (
                 <div className='container'>
                   <Header/>
                    <Outlet/>
                   <Menu/>
                 </div>    
            ):(
                <div className='device'>
                   <p>Available on mobile</p> 
                </div> 
            )
        }
        </>
    );
}
