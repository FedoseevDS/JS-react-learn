import React from "react"; // импортирую компонент
import s from "./MyPosts.module.css"; // примвоил переменную модулю css
import Post from "./Post/Post"; // импортирую функцию Post

const MyPosts = (props) => { // создал стрелочную функцию и обозначил что она использует props

  
  let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

  // создал переменную, в которую с помощью метода createRef передаю tag HTML
  let newPostElement = React.createRef();
  
  let addPost = () => { // создал стрелочную функцию addPost
    debugger;
    // current - ссылается на HTML документ, value - значение HTML документа
    let text = newPostElement.current.value;
    props.addPost('text'); // 
  }

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* ref - ссылка на переменную */}
          <textarea ref={ newPostElement }></textarea>
        </div>
        <div className={s.button_item}>
          {/* onClick - при нажатии на кнопку, передаем функцию */}
          <button onClick={ addPost }>Добавить пост</button> {/* onClick - что будет происходить при нажатии */}
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
