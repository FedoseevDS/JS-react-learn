import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://abali.ru/wp-content/uploads/2012/12/nordkapp_1680x1050.jpg" alt="" />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
