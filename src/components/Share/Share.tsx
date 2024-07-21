import style from '../../app/styles/components/Share.module.scss'
import copy from '../../app/assets/components/Share/Copy.png'
import twitter from '../../app/assets/components/Share/Twitter.png'
import snapchat from '../../app/assets/components/Share/Snapchat.png'
import discord from '../../app/assets/components/Share/Discord.png'
import tiktok from '../../app/assets/components/Share/TikTok.png'
import skype from '../../app/assets/components/Share/Skype.png'
import whatsapp from '../../app/assets/components/Share/WhatsApp.png'
import telegram from '../../app/assets/components/Share/Telegram.png'
import facebook from '../../app/assets/components/Share/Facebook .png'


export const Share = () => {
    return (
        <div className={style.share}>
            <h3 className={style.shareTitile}>Share:</h3>
            <div className={style.shareSocial}>
               <div><a href="#"><img src={copy} alt="icon social" /></a></div>
               <div><a href="#"><img src={twitter} alt="icon social" /></a></div>
               <div><a href="#"><img src={snapchat} alt="icon social" /></a></div>
               <div><a href="#"><img src={discord} alt="icon social" /></a></div>
               <div><a href="#"><img src={tiktok} alt="icon social" /></a></div>
               <div><a href="#"><img src={skype} alt="icon social" /></a></div>
               <div><a href="#"><img src={whatsapp} alt="icon social" /></a></div>
               <div><a href="#"><img src={telegram} alt="icon social" /></a></div>
               <div><a href="#"><img src={facebook} alt="icon social" /></a></div>
            </div>
        </div>
    );
}
