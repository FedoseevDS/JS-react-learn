import React from "react";
import s from "./Header.module.css";

const Header = (posts) => {
  return (
    <header className={s.header}>
      <div>
        <img
          src="https://e7.pngegg.com/pngimages/387/1007/png-clipart-graphics-logo-desktop-leaf-photography.png"
          alt=""
        />
      </div>
      <div>
        <h1>Социальная сеть</h1>
      </div>
    </header>
  );
};

export default Header;
