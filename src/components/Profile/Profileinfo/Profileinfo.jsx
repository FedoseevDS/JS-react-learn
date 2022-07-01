import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <img
          src="https://abali.ru/wp-content/uploads/2012/12/nordkapp_1680x1050.jpg"
          alt=""
        />
      </div>
      <div className={s.description_block}>
        ava + description
        </div>
    </div>
  );
};

export default ProfileInfo;
