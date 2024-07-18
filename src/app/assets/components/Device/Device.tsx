import React, { useEffect, useState } from 'react';

const Device: React.FC = () => {
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
    <div>
      {isTelegramMobile ? (
        <p>Вы используете мобильное устройство Telegram</p>
      ) : (
        <p>Вы не используете мобильное устройство Telegram</p>
      )}
    </div>
  );
};

export default Device;
