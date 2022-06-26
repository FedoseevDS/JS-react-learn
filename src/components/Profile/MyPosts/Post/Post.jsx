import React from 'react'; // импортирую компонент
import s from './Posts.module.css'; // создал модульный класс для css 
import ocean from '../../../img/ocean.png';

/* console.log(props.message); */

const Post = (props) => { // создал стрелочную функцию 
    return ( // возвращает результат
      <div className={s.item}> {/* тег блока, с классом для css */}
        <img className={s.img} src={ocean} alt=''/>
        {props.message}
          <div>
        <span>Like</span> {props.likeCount}
      </div>
    </div>
  )
}

export default Post; // экспортирую функцию в проект