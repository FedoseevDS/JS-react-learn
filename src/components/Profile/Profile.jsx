import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';


const Profile = () => {
    return  <div>
    <img src='https://abali.ru/wp-content/uploads/2012/12/nordkapp_1680x1050.jpg'/>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;