import React, { useState } from "react";
import style from "../../app/styles/components/Toogle.module.scss";

export const ToogleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className={style.toogle}>
      <div className={style.toggleSwitch}>
        <input
          type="checkbox"
          id="toggle"
          className={style.toggleSwitchCheckbox}
          checked={isOn}
          onChange={handleToggle}
        />
        <label className={style.toggleSwitchLabel} htmlFor="toggle">
          <span className={style.toggleSwitchInner}></span>
          <span className={style.toggleSwitchSwitch}></span>
        </label>
      </div>
    </div>
  );
};
