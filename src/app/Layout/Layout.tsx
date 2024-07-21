// import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  // const [isTelegramMobile, setIsTelegramMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   if ((window as any).Telegram && (window as any).Telegram.WebApp) {
  //     const tg = (window as any).Telegram.WebApp;
  //     console.log('Telegram WebApp:', tg); 
  //     if (tg && tg.initDataUnsafe) {
  //       console.log('Platform:', tg.initDataUnsafe.platform); 
  //       setIsTelegramMobile(tg.initDataUnsafe.platform === 'mobile');
  //     }
  //   } else {
  //     console.log('Telegram WebApp is not available');
  //     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  //     setIsTelegramMobile(isMobile);
  //   }
  // }, []);

  return (
    <>
      {/* {isTelegramMobile ? (
        <div className='container'>
          <Header />
          <Outlet />
          <Menu />
        </div>
      ) : (
        <div className='device'>
          <p>Available on mobile</p>
        </div>
      )} */}
       
          <Header />
          <div className='container'>
          <div style={{height:"550px" , overflow:"auto"}}>
            <Outlet />
          </div>
          </div>
          <Menu />
        
    </>
  );
};
