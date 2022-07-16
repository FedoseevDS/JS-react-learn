import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs" + props.id;

  /* props.name, props.id */

  return (
    <div className={s.dialog}>
      <img src="https://www.ridus.ru/images/2020/3/13/1064838/in_article_28cb896f83.jpg" alt="" />
      <NavLink to="#">{props.name}</NavLink>{" "}
    </div>
  );
};

export default DialogItem;
