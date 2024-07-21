import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../app/styles/components/Menu.module.scss";

import { Extraicon } from "../../ui/componentsIcons/ExtraiconIcon";
import { Friendsicon } from "../../ui/componentsIcons/FriendsIcon";
import { Networkicon } from "../../ui/componentsIcons/NetworkIcon";
import { Storeicon } from "../../ui/componentsIcons/StoreIcon";
import { Taskicon } from "../../ui/componentsIcons/Task";

export const Menu: React.FC = () => {
  return (
    <div className={styles.menuNavBar}>
      <div className="container">
        <nav className={styles.menuNav}>
          <ul className={styles.menu}>
            <li>
              <NavLink to={"/"}>
                <div>
                  <Extraicon className={styles.menuIcons} />
                  <p>Extraction</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/store"}>
                <div>
                  <Storeicon className={styles.menuIcons} />
                  <p>Store</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/task"}>
                <div>
                  <Taskicon className={styles.menuIcons} />
                  <p>Task</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/friends"}>
                <div>
                  <Friendsicon className={styles.menuIcons} />
                  <p>Friends</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/network"}>
                <div>
                  <Networkicon className={styles.menuIcons} />
                  <p>Network</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
