import React from 'react'; // импортирую модуль
import s from './Navbar.module.css'; // создал объект с именем s и импортировал в него ключи, название классов без .

/* let classes = { 
    'nav': 'Navbar_nav__qyS8H', 
    'item': 'Navbar_item__7Vnc1' 
} */

const Navbar = () => { 
    return <nav className={s.nav}> 
    <div className={s.item}> 
      <a>Пользователь</a> 
    </div> 
    <div className={s.item}> 
      <a>Сообщения</a> 
    </div> 
    <div className={s.item}> 
      <a>Новости</a> 
    </div> 
    <div className={s.item}> 
      <a>Музыка</a> 
    </div> 
    <div className={s.item}> 
      <a>Настройки</a> 
    </div> 
  </nav> 
}

export default Navbar; 

