    import React from "react";
    import { NavLink } from "react-router-dom";
    import styles from "../../app/styles/components/Menu.module.scss";

    import {Extraicon} from "../../ui/componentsIcons/ExtraiconIcon";
    import FriendsIcon from "../../app/assets/components/Menu/friends.png";
    import NetworkIcon from "../../app/assets/components/Menu/network.png";
    import StoreIcon from "../../app/assets/components/Menu/store.png";
    import TaskIcon from "../../app/assets/components/Menu/task.png";

    export const Menu: React.FC = () => {
    return (
        <nav className={styles.menuNav}>
        <ul className={styles.menu}>
            <li>
            <NavLink to={"/"}>
                <div>
                <Extraicon className={styles.menuIcons}/>
                <p>Extraction</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to={"/store"}>
                <div>
                <img src={StoreIcon} alt="" />
                <p>Store</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to={"/task"}>
                <div>
                <img src={TaskIcon} alt="" />
                <p>Task</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to={"/Friends"}>
                <div>
                <img src={FriendsIcon} alt="" />
                <p>Friends</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to={"/network"}>
                <div>
                <img src={NetworkIcon} alt="" />
                <p>Network</p>
                </div>
            </NavLink>
            </li>
        </ul>
        </nav>
    );
    };
