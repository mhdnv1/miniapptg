import React from "react";
import styles from "../../app/styles/components/Header.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.headerNav}>
          <div className={styles.headerLeft}>
            <span>
            🐋
            </span>
            <h5>Asti Ann</h5>
            <span className={styles.northEast}>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79992 6.6665L1.33325 6.19984L5.19992 2.33317H2.99992V1.6665H6.33325V4.99984H5.66659V2.79984L1.79992 6.6665Z"
                  fill="#27AE60"
                />
              </svg>
              232
            </span>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.share}>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 20.5C14.1667 20.5 13.4583 20.2083 12.875 19.625C12.2917 19.0417 12 18.3333 12 17.5C12 17.3833 12.0083 17.2625 12.025 17.1375C12.0417 17.0125 12.0667 16.9 12.1 16.8L5.05 12.7C4.76667 12.95 4.45 13.1458 4.1 13.2875C3.75 13.4292 3.38333 13.5 3 13.5C2.16667 13.5 1.45833 13.2083 0.875 12.625C0.291667 12.0417 0 11.3333 0 10.5C0 9.66667 0.291667 8.95833 0.875 8.375C1.45833 7.79167 2.16667 7.5 3 7.5C3.38333 7.5 3.75 7.57083 4.1 7.7125C4.45 7.85417 4.76667 8.05 5.05 8.3L12.1 4.2C12.0667 4.1 12.0417 3.9875 12.025 3.8625C12.0083 3.7375 12 3.61667 12 3.5C12 2.66667 12.2917 1.95833 12.875 1.375C13.4583 0.791667 14.1667 0.5 15 0.5C15.8333 0.5 16.5417 0.791667 17.125 1.375C17.7083 1.95833 18 2.66667 18 3.5C18 4.33333 17.7083 5.04167 17.125 5.625C16.5417 6.20833 15.8333 6.5 15 6.5C14.6167 6.5 14.25 6.42917 13.9 6.2875C13.55 6.14583 13.2333 5.95 12.95 5.7L5.9 9.8C5.93333 9.9 5.95833 10.0125 5.975 10.1375C5.99167 10.2625 6 10.3833 6 10.5C6 10.6167 5.99167 10.7375 5.975 10.8625C5.95833 10.9875 5.93333 11.1 5.9 11.2L12.95 15.3C13.2333 15.05 13.55 14.8542 13.9 14.7125C14.25 14.5708 14.6167 14.5 15 14.5C15.8333 14.5 16.5417 14.7917 17.125 15.375C17.7083 15.9583 18 16.6667 18 17.5C18 18.3333 17.7083 19.0417 17.125 19.625C16.5417 20.2083 15.8333 20.5 15 20.5ZM15 4.5C15.2833 4.5 15.5208 4.40417 15.7125 4.2125C15.9042 4.02083 16 3.78333 16 3.5C16 3.21667 15.9042 2.97917 15.7125 2.7875C15.5208 2.59583 15.2833 2.5 15 2.5C14.7167 2.5 14.4792 2.59583 14.2875 2.7875C14.0958 2.97917 14 3.21667 14 3.5C14 3.78333 14.0958 4.02083 14.2875 4.2125C14.4792 4.40417 14.7167 4.5 15 4.5ZM3 11.5C3.28333 11.5 3.52083 11.4042 3.7125 11.2125C3.90417 11.0208 4 10.7833 4 10.5C4 10.2167 3.90417 9.97917 3.7125 9.7875C3.52083 9.59583 3.28333 9.5 3 9.5C2.71667 9.5 2.47917 9.59583 2.2875 9.7875C2.09583 9.97917 2 10.2167 2 10.5C2 10.7833 2.09583 11.0208 2.2875 11.2125C2.47917 11.4042 2.71667 11.5 3 11.5ZM15 18.5C15.2833 18.5 15.5208 18.4042 15.7125 18.2125C15.9042 18.0208 16 17.7833 16 17.5C16 17.2167 15.9042 16.9792 15.7125 16.7875C15.5208 16.5958 15.2833 16.5 15 16.5C14.7167 16.5 14.4792 16.5958 14.2875 16.7875C14.0958 16.9792 14 17.2167 14 17.5C14 17.7833 14.0958 18.0208 14.2875 18.2125C14.4792 18.4042 14.7167 18.5 15 18.5Z"
                  fill="#5F6368"
                />
              </svg>
            </div>
            <div className={styles.liters}>
              <span>
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.775 17.5C8.975 17.4833 9.14583 17.4042 9.2875 17.2625C9.42917 17.1208 9.5 16.95 9.5 16.75C9.5 16.5167 9.425 16.3292 9.275 16.1875C9.125 16.0458 8.93333 15.9833 8.7 16C8.01667 16.05 7.29167 15.8625 6.525 15.4375C5.75833 15.0125 5.275 14.2417 5.075 13.125C5.04167 12.9417 4.95417 12.7917 4.8125 12.675C4.67083 12.5583 4.50833 12.5 4.325 12.5C4.09167 12.5 3.9 12.5875 3.75 12.7625C3.6 12.9375 3.55 13.1417 3.6 13.375C3.88333 14.8917 4.55 15.975 5.6 16.625C6.65 17.275 7.70833 17.5667 8.775 17.5ZM8.5 20.5C6.21667 20.5 4.3125 19.7167 2.7875 18.15C1.2625 16.5833 0.5 14.6333 0.5 12.3C0.5 10.6333 1.1625 8.82083 2.4875 6.8625C3.8125 4.90417 5.81667 2.78333 8.5 0.5C11.1833 2.78333 13.1875 4.90417 14.5125 6.8625C15.8375 8.82083 16.5 10.6333 16.5 12.3C16.5 14.6333 15.7375 16.5833 14.2125 18.15C12.6875 19.7167 10.7833 20.5 8.5 20.5ZM8.5 18.5C10.2333 18.5 11.6667 17.9125 12.8 16.7375C13.9333 15.5625 14.5 14.0833 14.5 12.3C14.5 11.0833 13.9958 9.70833 12.9875 8.175C11.9792 6.64167 10.4833 4.96667 8.5 3.15C6.51667 4.96667 5.02083 6.64167 4.0125 8.175C3.00417 9.70833 2.5 11.0833 2.5 12.3C2.5 14.0833 3.06667 15.5625 4.2 16.7375C5.33333 17.9125 6.76667 18.5 8.5 18.5Z"
                    fill="#006DF0"
                  />
                </svg>
              </span>
              <>
                <p>0.15</p>
                <small>liters</small>
              </>
            </div>
            <div className={styles.points}>
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18.5C6.98333 18.5 4.85417 18.1125 3.1125 17.3375C1.37083 16.5625 0.5 15.6167 0.5 14.5V4.5C0.5 3.4 1.37917 2.45833 3.1375 1.675C4.89583 0.891667 7.01667 0.5 9.5 0.5C11.9833 0.5 14.1042 0.891667 15.8625 1.675C17.6208 2.45833 18.5 3.4 18.5 4.5V14.5C18.5 15.6167 17.6292 16.5625 15.8875 17.3375C14.1458 18.1125 12.0167 18.5 9.5 18.5ZM9.5 6.525C10.9833 6.525 12.475 6.3125 13.975 5.8875C15.475 5.4625 16.3167 5.00833 16.5 4.525C16.3167 4.04167 15.4792 3.58333 13.9875 3.15C12.4958 2.71667 11 2.5 9.5 2.5C7.98333 2.5 6.49583 2.7125 5.0375 3.1375C3.57917 3.5625 2.73333 4.025 2.5 4.525C2.73333 5.025 3.57917 5.48333 5.0375 5.9C6.49583 6.31667 7.98333 6.525 9.5 6.525ZM9.5 11.5C10.2 11.5 10.875 11.4667 11.525 11.4C12.175 11.3333 12.7958 11.2375 13.3875 11.1125C13.9792 10.9875 14.5375 10.8333 15.0625 10.65C15.5875 10.4667 16.0667 10.2583 16.5 10.025V7.025C16.0667 7.25833 15.5875 7.46667 15.0625 7.65C14.5375 7.83333 13.9792 7.9875 13.3875 8.1125C12.7958 8.2375 12.175 8.33333 11.525 8.4C10.875 8.46667 10.2 8.5 9.5 8.5C8.8 8.5 8.11667 8.46667 7.45 8.4C6.78333 8.33333 6.15417 8.2375 5.5625 8.1125C4.97083 7.9875 4.41667 7.83333 3.9 7.65C3.38333 7.46667 2.91667 7.25833 2.5 7.025V10.025C2.91667 10.2583 3.38333 10.4667 3.9 10.65C4.41667 10.8333 4.97083 10.9875 5.5625 11.1125C6.15417 11.2375 6.78333 11.3333 7.45 11.4C8.11667 11.4667 8.8 11.5 9.5 11.5ZM9.5 16.5C10.2667 16.5 11.0458 16.4417 11.8375 16.325C12.6292 16.2083 13.3583 16.0542 14.025 15.8625C14.6917 15.6708 15.25 15.4542 15.7 15.2125C16.15 14.9708 16.4167 14.725 16.5 14.475V12.025C16.0667 12.2583 15.5875 12.4667 15.0625 12.65C14.5375 12.8333 13.9792 12.9875 13.3875 13.1125C12.7958 13.2375 12.175 13.3333 11.525 13.4C10.875 13.4667 10.2 13.5 9.5 13.5C8.8 13.5 8.11667 13.4667 7.45 13.4C6.78333 13.3333 6.15417 13.2375 5.5625 13.1125C4.97083 12.9875 4.41667 12.8333 3.9 12.65C3.38333 12.4667 2.91667 12.2583 2.5 12.025V14.5C2.58333 14.75 2.84583 14.9917 3.2875 15.225C3.72917 15.4583 4.28333 15.6708 4.95 15.8625C5.61667 16.0542 6.35 16.2083 7.15 16.325C7.95 16.4417 8.73333 16.5 9.5 16.5Z"
                    fill="#EB5757"
                  />
                </svg>
                  </span>
              <div>
                <p>3.2</p>
                <small>points</small>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
