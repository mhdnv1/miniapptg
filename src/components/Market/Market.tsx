import { MarketCard } from "../MarketCard";
import { initialMarket } from "../../data/data";
import style from "../../app/styles/components/Market.module.scss";
import cupImage from "../../app/assets/components/Store/cup.png";

export const Market = () => {
  return (
    <div className={style.market}>
      <h2>Sell ​​water</h2>
      <span>You can sell it!</span>
      <div className={style.marketMain}>
        <div className={style.marketMainHeader}>
          <div className={style.marketMainHeaderLeft}>
            <p>Level 1</p>
            <span>Cup: 250 ml.</span>
          </div>
          <div className={style.marketMainHeaderRight}>
            <button>
              <span>
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.31667 8.73317L0.5 7.9165L4 4.4165L7.5 7.9165L6.68333 8.73317L4 6.06442L1.31667 8.73317ZM1.31667 5.23317L0.5 4.4165L4 0.916504L7.5 4.4165L6.68333 5.23317L4 2.56442L1.31667 5.23317Z"
                    fill="white"
                  />
                </svg>
              </span>
              Upgrade level
            </button>
            <br />
            <span>To 350 ml.</span>
          </div>
        </div>
        <img src={cupImage} alt="" />
        <div className={style.marketMainPercent}>
          <div>
            <svg
              width="121"
              height="4"
              viewBox="0 0 121 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="120" height="3" rx="1.5" fill="#ECEEF1" />
              <rect x="0.5" width="120" height="4" rx="2" fill="#006DF0" />
            </svg>
            100%
          </div>
          <p><span>250</span> ml. out of 250 ml.</p>
        </div>
      </div>
      <h3 className={style.marketCardsTitle}>Покупатели</h3>
      <div className={style.marketCards}>
        {
          initialMarket && initialMarket.map((item)=>(
            <MarketCard 
             lvl={item.lvl} 
             image={item.image} 
             imageTwo={item.imageTwo}
             title={item.title}
             volume={item.volume}
             bonus={item.bonus}
            />
          ))
        }
      </div>
    </div>
  );
};
