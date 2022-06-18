import React from 'react'; // импортирую модуль React
import './App.css'; // импортирую файл, которой находиться в моей директории
import Header from './components/Header'; // импортирую Header.jsx и указываю путь к файлу
import Navbar from './components/Navbar'; // импортирую Navbar.jsx и указываю путь к файлу
import Profile from './components/Profile'; // импортирую Profile.jsx и указываю путь к файлу

const App = () => { // функция App, возвращает с помощью JSX, разметку HTML
  return ( // команда возвращает результат
    <div className='app-wrapper'> {/* блок с классом для css */}
      <Header /> {/* отображаю файл Header.jsx */}
      <Navbar /> {/* отображаю файл Navbar.jsx */}
      <Profile /> {/* отображаю файл Profile.jsx */}
    </div> // закрывающий тег
  )
}

export default App; // закрывающий тег