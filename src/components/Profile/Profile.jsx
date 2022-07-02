import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

/*   let posts = [
    {message: 'Сегодня пришла заработная плата, я был не много удивлен', likeCount: 20},
    {message: 'У моей собаки что с настроением', likeCount: 25},
    {message: 'Что делать когда хочеться выпить, а нельзя?', likeCount: 32},
    {message: 'Почему не могу оторваться от ее глаз?', likeCount: 12},
    {message: 'Луна оказывается не белая!', likeCount: 17},
  ] */

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
