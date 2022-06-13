import React from 'react';
import './App.css'; // импортирую файл, которой находиться в моей директории
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => { // функция App, возвращает с помощью JSX, разметку HTML
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />  
    </div>
  )
}

export default App;