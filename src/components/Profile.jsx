import React from 'react';
import './Profile.css';

const Profile = () => {
    return  <div className='content'>
    <img src='https://abali.ru/wp-content/uploads/2012/12/nordkapp_1680x1050.jpg'/>
    <div>
      ava + description
    </div>
    <div>
      My posts
    </div>
      <div>
        New posts
      </div>
      <div className='posts'>
        <div className='item'>
        Блок 1
        </div>
        <div className='item'>
        Блок 2
        </div>
      </div>
    </div>
}

export default Profile;