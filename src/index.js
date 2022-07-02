import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let posts = [
  {message: 'Сегодня пришла заработная плата, я был не много удивлен', likeCount: 20},
  {message: 'У моей собаки что с настроением', likeCount: 25},
  {message: 'Что делать когда хочеться выпить, а нельзя?', likeCount: 32},
  {message: 'Почему не могу оторваться от ее глаз?', likeCount: 12},
  {message: 'Луна оказывается не белая!', likeCount: 17},
] 

let dialogs = [
  { id: 1, name: "Антон" },
  { id: 2, name: "Павел" },
  { id: 3, name: "Саша" },
  { id: 4, name: "Света" },
  { id: 5, name: "Ольга" },
  { id: 6, name: "Ирина" },
  { id: 7, name: "Анастасия" },
];

let messages = [
  { id: 1, message: "Как жизнь братан" },
  { id: 2, message: "Все отлично, как сам?" },
  { id: 3, message: "Что ты делаешь сегодня?" },
  { id: 4, message: "Отдыхаю после тяжелого рабочего дня" },
  { id: 5, message: "Пошли погуляем" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
