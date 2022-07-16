import React, { createRef } from "react"; // подключил React, createRef библиотеки из модуля react
import s from "./../Dialogs.module.css"; // присвоил название модулю css

const Message = (props) => { // создал стрелочную переменную с props

  let newMessageElement = createRef(); // присвоил переменной метод. createRef - ссылка на тег элемент

  let addMessage = () => { // создал стрелочную функцию
    
    // присвоил переменной значение newMessageElement, current - говорит что это html элемент,
    // value - значение элемента
    let text = newMessageElement.current.value;
    alert('Я хороший, умный человек и у меня все получится'); // выводит сообщение на экране
  }

  return ( // возвращает значение на экран
    <div> {/* тег блока */}
      <textarea ref={ newMessageElement }></textarea> {/* тег для написания сообщения ref - ссылка JS на переменную */}
      <button onClick={ addMessage }>Добавить</button> {/* тег кнопки, onClick - что произойдет после нажатия кнопки */}
      <div className={s.message}>{props.message}</div> {/* тег блока, с классом и сообщением переданным с помощью props */}
    </div> // закрывающий тег блока
  );
};

export default Message; // экспортировал функцию в проект
