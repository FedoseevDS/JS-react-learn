import React from "react"; // подключил библиотеку React
import s from "./Dialogs.module.css"; // присвоил название модулю css 
import DialogItem from "./DialogItem/DialogItem"; // импортировал функцию из другой директории
import Message from './Message/Message' // импортировал функцию из другой директории

const Dialogs = (props) => { // создал стрелочную функцию с props
  
  // 
  let messagesElements = props.state.messages.map ( m => <Message message={m.message} id={m.id} /> );
  
  //
  let dialogsElements = props.state.name.map( d => <DialogItem name={d.name} id={d.id} /> );

  return ( // возвращает на экран
    <div className={s.dialogs}> {/* тег блока, с классом и ссылкой на стили */}
      <div className={s.dialogs_items}> {/* тег блока, с классом и ссылкой на стили */}
        {dialogsElements} {/* ссылка на переменную */}
      </div> {/* тег блока */}
      <div className={s.messages}> {/* тег блока, с классом и ссылкой на стили */}
        {messagesElements} {/* ссылка на переменную */}
      </div> {/* закрывающий тег блока */}
      <div className={s.answer}> {/* тег блока, с классом и ссылкой на стили */}
        абракадабра
      </div> {/* закрывающий тег блока */}
    </div> // закрывающий тег блока
  );
};

export default Dialogs; // експортирую функцию в проект
