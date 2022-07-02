import React from "react"; // импортирую компонент
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

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
      </div>
    </div>
  );
};

export default MyPosts; // экспортирую функцию в проект
