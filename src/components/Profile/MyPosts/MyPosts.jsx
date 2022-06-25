import React from 'react'; // импортирую компонент
/* import mp from './MyPosts.module.css'; */
import Post from './Post/Post';

const MyPosts = () => { // создал стрелочную функцию 
    return ( // возвращает результат
    <div> {/* тег блока */}
      My posts 
      <div> {/* закрывающий тег блока */}
        <textarea></textarea> {/* место для ввода больших текстовых сообщений */}
        <button>Добавить пост</button>
        <button>Удалить текст</button>
      </div> {/* закрывающий тег */}
      <Post message='Hi, how are you?' likeCount='- 20' />
      <Post message="It's my first post" likeCount='- 25' />
    </div> 
  )
}

export default MyPosts; // экспортирую функцию в проект