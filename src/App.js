import React from "react"; // импортирую модуль React
import "./App.css"; // импортирую файл, которой находиться в моей директории
import Header from "./components/Header/Header"; // импортирую Header.jsx и указываю путь к файлу
import Navbar from "./components/Navbar/Navbar"; // импортирую Navbar.jsx и указываю путь к файлу
import Profile from "./components/Profile/Profile"; // импортирую Profile.jsx и указываю путь к файлу
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage}/>} />
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App; 
