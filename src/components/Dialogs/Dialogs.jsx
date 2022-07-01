import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs" + props.id;

  /* props.name, props.id */

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to="#">{props.name}</NavLink>{" "}
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

let dialogs = [
  { id: 1, name: "Антон" },
  { id: 2, name: "Павел" },
  { id: 3, name: "Саша" },
  { id: 4, name: "Света" },
  { id: 5, name: "Ольга" },
  { id: 6, name: "Ирина" },
  { id: 7, name: "Анастасия" },
];

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );


let messages = [
  { id: 1, message: "Как жизнь братан" },
  { id: 2, message: "Все отлично, как сам?" },
  { id: 3, message: "Что ты делаешь сегодня?" },
  { id: 4, message: "Отдыхаю после тяжелого рабочего дня" },
  { id: 5, message: "Пошли погуляем" },
];

let messagesElements = messages.map ( m => <Message message={m.message} id={m.id} /> );

const Dialog = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialog;
