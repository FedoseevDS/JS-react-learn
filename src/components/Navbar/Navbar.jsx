import React from 'react'; // импортирую модуль
import n from './Navbar.module.css'; // создал объект с именем s и импортировал в него ключи, название классов без .

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

const Navbar = () => { // создал функцию с переменной Navbar
    return (
    <nav className={n.nav}> {/* функция возвращает html разметку */}
      <div className={n.item}> {/* блок с объектом и его свойством */}
        <a>Пользователь</a> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={`${n.item} ${n.active}`}> {/* блок с объектом и 2 свойствами */} 
        <a>Сообщения</a> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={n.item}> {/* блок с объектом и его свойством */}
        <a>Новости</a> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={n.item}> {/* блок с объектом и его свойством */}
        <a>Музыка</a> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
      <div className={n.item}> {/* блок с объектом и его свойством */}
        <a>Настройки</a> {/* тег гиперссылки */}
      </div> {/* закрывающий тег */}
    </nav> // закрывающий тег всей функции
  )
}

export default Navbar; // создал експорт функции в проект

