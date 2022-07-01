import React from "react"; // импортирую компонент
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let posts = [
    {message: 'Сегодня пришла заработная плата, я был не много удивлен', likeCount: 20},
    {message: 'У моей собаки что с настроением', likeCount: 25},
    {message: 'Что делать когда хочеться выпить, а нельзя?', likeCount: 32},
    {message: 'Почему не могу оторваться от ее глаз?', likeCount: 12},
    {message: 'Луна оказывается не белая!', likeCount: 17},
  ]

  let postsElements = posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.button_item}>
          <button>Добавить пост</button>
          <button>Удалить текст</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}

        {/* <posts id={posts[0].id} message={posts[0].message} likeCount={posts[0].likeCount} />
        <posts id={posts[1].id} message={posts[1].message} likeCount={posts[1].likeCount} /> */}
      </div>
    </div>
  );
};

export default MyPosts; // экспортирую функцию в проект
