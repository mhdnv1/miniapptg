import React  from "react";
import style from "../../app/styles/pages/Store.module.scss";
import { StoreBlock } from "../../components/Store";
import { Market } from "../../components/Market";
import { Link, useLocation } from "react-router-dom";

export const Store: React.FC = () => {
  const { pathname } = useLocation(); 
  console.log(pathname);
  
  return (
    <div className={style.store}>
      <div className={style.storeHeader}>
        <button>
          <Link to={"/store"}>
            <span>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 2V0H17.5V2H1.5ZM1.5 16V10H0.5V8L1.5 3H17.5L18.5 8V10H17.5V16H15.5V10H11.5V16H1.5ZM3.5 14H9.5V10H3.5V14ZM2.55 8H16.45L15.85 5H3.15L2.55 8Z"
                  fill="#006DF0"
                />
              </svg>
            </span>
            Store
          </Link>
        </button>
        <button>
          <Link to={'/store/market'}>
            <span>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 18C6.98333 18 4.85417 17.6125 3.1125 16.8375C1.37083 16.0625 0.5 15.1167 0.5 14V4C0.5 2.9 1.37917 1.95833 3.1375 1.175C4.89583 0.391667 7.01667 0 9.5 0C11.9833 0 14.1042 0.391667 15.8625 1.175C17.6208 1.95833 18.5 2.9 18.5 4V14C18.5 15.1167 17.6292 16.0625 15.8875 16.8375C14.1458 17.6125 12.0167 18 9.5 18ZM9.5 6.025C10.9833 6.025 12.475 5.8125 13.975 5.3875C15.475 4.9625 16.3167 4.50833 16.5 4.025C16.3167 3.54167 15.4792 3.08333 13.9875 2.65C12.4958 2.21667 11 2 9.5 2C7.98333 2 6.49583 2.2125 5.0375 2.6375C3.57917 3.0625 2.73333 3.525 2.5 4.025C2.73333 4.525 3.57917 4.98333 5.0375 5.4C6.49583 5.81667 7.98333 6.025 9.5 6.025ZM9.5 11C10.2 11 10.875 10.9667 11.525 10.9C12.175 10.8333 12.7958 10.7375 13.3875 10.6125C13.9792 10.4875 14.5375 10.3333 15.0625 10.15C15.5875 9.96667 16.0667 9.75833 16.5 9.525V6.525C16.0667 6.75833 15.5875 6.96667 15.0625 7.15C14.5375 7.33333 13.9792 7.4875 13.3875 7.6125C12.7958 7.7375 12.175 7.83333 11.525 7.9C10.875 7.96667 10.2 8 9.5 8C8.8 8 8.11667 7.96667 7.45 7.9C6.78333 7.83333 6.15417 7.7375 5.5625 7.6125C4.97083 7.4875 4.41667 7.33333 3.9 7.15C3.38333 6.96667 2.91667 6.75833 2.5 6.525V9.525C2.91667 9.75833 3.38333 9.96667 3.9 10.15C4.41667 10.3333 4.97083 10.4875 5.5625 10.6125C6.15417 10.7375 6.78333 10.8333 7.45 10.9C8.11667 10.9667 8.8 11 9.5 11ZM9.5 16C10.2667 16 11.0458 15.9417 11.8375 15.825C12.6292 15.7083 13.3583 15.5542 14.025 15.3625C14.6917 15.1708 15.25 14.9542 15.7 14.7125C16.15 14.4708 16.4167 14.225 16.5 13.975V11.525C16.0667 11.7583 15.5875 11.9667 15.0625 12.15C14.5375 12.3333 13.9792 12.4875 13.3875 12.6125C12.7958 12.7375 12.175 12.8333 11.525 12.9C10.875 12.9667 10.2 13 9.5 13C8.8 13 8.11667 12.9667 7.45 12.9C6.78333 12.8333 6.15417 12.7375 5.5625 12.6125C4.97083 12.4875 4.41667 12.3333 3.9 12.15C3.38333 11.96667 2.91667 11.75833 2.5 11.525V14C2.58333 14.25 2.84583 14.4917 3.2875 14.725C3.72917 14.9583 4.28333 15.1708 4.95 15.3625C5.61667 15.5542 6.35 15.7083 7.15 15.825C7.95 15.9417 8.73333 16 9.5 16Z"
                  fill="black"
                  fill-opacity="0.5"
                />
              </svg>
            </span>
            Market
          </Link>
        </button>
      </div>
      {pathname === "/store" ? <StoreBlock /> : <Market />}
    </div>
  );
};
