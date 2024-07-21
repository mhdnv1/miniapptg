import style from '../../app/styles/components/FriendsCard.module.scss'

interface FriendCardProps {
     iconName:string,
     huamnName:string,
     bonus:number,
     bonusFriend:number
}

export const FriendsCard:React.FC<FriendCardProps> = ({iconName , huamnName , bonus , bonusFriend}) => {
    return (
        <div className={style.friendsCard}>
        <div className={style.friendsCardLeft}>
          <div className={style.friendsCardLeftName}>
            <span className={style.friendsCardLeftNameIcon}>{iconName}</span>
            <span className={style.friendsCardLeftNameHuman}>{huamnName}</span>
          </div>
          <div className={style.friendsCardLeftBonus}>
            <span>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 13.375C4.71736 13.375 3.2092 13.1005 1.97552 12.5516C0.74184 12.0026 0.125 11.3326 0.125 10.5417V3.45833C0.125 2.67917 0.747743 2.01215 1.99323 1.45729C3.23872 0.902431 4.74097 0.625 6.5 0.625C8.25903 0.625 9.76128 0.902431 11.0068 1.45729C12.2523 2.01215 12.875 2.67917 12.875 3.45833V10.5417C12.875 11.3326 12.2582 12.0026 11.0245 12.5516C9.7908 13.1005 8.28264 13.375 6.5 13.375ZM6.5 4.89271C7.55069 4.89271 8.60729 4.74219 9.66979 4.44115C10.7323 4.1401 11.3285 3.8184 11.4583 3.47604C11.3285 3.13368 10.7352 2.80903 9.67865 2.50208C8.62205 2.19514 7.5625 2.04167 6.5 2.04167C5.42569 2.04167 4.37205 2.19219 3.33906 2.49323C2.30608 2.79427 1.70694 3.12188 1.54167 3.47604C1.70694 3.83021 2.30608 4.15486 3.33906 4.45C4.37205 4.74514 5.42569 4.89271 6.5 4.89271ZM6.5 8.41667C6.99583 8.41667 7.47396 8.39306 7.93437 8.34583C8.39479 8.29861 8.83455 8.23073 9.25365 8.14219C9.67274 8.05365 10.0682 7.94444 10.4401 7.81458C10.812 7.68472 11.1514 7.53715 11.4583 7.37187V5.24687C11.1514 5.41215 10.812 5.55972 10.4401 5.68958C10.0682 5.81944 9.67274 5.92865 9.25365 6.01719C8.83455 6.10573 8.39479 6.17361 7.93437 6.22083C7.47396 6.26806 6.99583 6.29167 6.5 6.29167C6.00417 6.29167 5.52014 6.26806 5.04792 6.22083C4.57569 6.17361 4.13003 6.10573 3.71094 6.01719C3.29184 5.92865 2.89931 5.81944 2.53333 5.68958C2.16736 5.55972 1.83681 5.41215 1.54167 5.24687V7.37187C1.83681 7.53715 2.16736 7.68472 2.53333 7.81458C2.89931 7.94444 3.29184 8.05365 3.71094 8.14219C4.13003 8.23073 4.57569 8.29861 5.04792 8.34583C5.52014 8.39306 6.00417 8.41667 6.5 8.41667ZM6.5 11.9583C7.04306 11.9583 7.59497 11.917 8.15573 11.8344C8.71649 11.7517 9.23299 11.6425 9.70521 11.5068C10.1774 11.371 10.5729 11.2175 10.8917 11.0464C11.2104 10.8752 11.3993 10.701 11.4583 10.524V8.78854C11.1514 8.95382 10.812 9.10139 10.4401 9.23125C10.0682 9.36111 9.67274 9.47031 9.25365 9.55885C8.83455 9.6474 8.39479 9.71528 7.93437 9.7625C7.47396 9.80972 6.99583 9.83333 6.5 9.83333C6.00417 9.83333 5.52014 9.80972 5.04792 9.7625C4.57569 9.71528 4.13003 9.6474 3.71094 9.55885C3.29184 9.47031 2.89931 9.36111 2.53333 9.23125C2.16736 9.10139 1.83681 8.95382 1.54167 8.78854V10.5417C1.60069 10.7188 1.78663 10.8899 2.09948 11.0552C2.41233 11.2205 2.80486 11.371 3.27708 11.5068C3.74931 11.6425 4.26875 11.7517 4.83542 11.8344C5.40208 11.917 5.95694 11.9583 6.5 11.9583Z"
                  fill="#EB5757"
                />
              </svg>
            </span>
            <span>+ {bonus}</span>
          </div>
        </div>
        <div className={style.friendsCardRight}>
           <p>+ {bonusFriend}</p>
           <span>for friends</span>
        </div>
      </div>
    );
}