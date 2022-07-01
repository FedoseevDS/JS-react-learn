import React from 'react'; // импортирую модуль
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'; // создал объект с именем s и импортировал в него ключи, название классов без .

/* let classes = { 
    'nav': 'Navbar_nav__qyS8H', 
    'item': 'Navbar_item__7Vnc1' 
    'active': 'Navbar_blablabla'
} */

/* let c1 = 'item';
let c2 = 'active';
'item active'
let classes = c1 + ' ' + c2;
let classesNew = `${n.item} ${n.active}`; */

const DialogItem = () => {
  
}

const Navbar = () => { // создал функцию с переменной Navbar
    return (
    <nav className={s.nav}> {/* функция возвращает html разметку */}
      <div className={s.item}> {/* блок с объектом и его свойством */}
        <NavLink to="/profile" activeClassName={s.active}>Пользователь</NavLink> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={s.item}> {/* блок с объектом и 2 свойствами */} 
        <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={s.item}> {/* блок с объектом и его свойством */}
        <NavLink to='/news' activeClassName={s.active}>Новости</NavLink> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={s.item}> {/* блок с объектом и его свойством */}
        <NavLink to='/music' activeClassName={s.active}>Музыка</NavLink> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={s.item}> {/* блок с объектом и его свойством */}
        <NavLink to='/setting' activeClassName={s.active}>Настройки</NavLink> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
    </nav> // закрывающий тег всей функции
  )
}

export default Navbar; // создал експорт функции в проект

