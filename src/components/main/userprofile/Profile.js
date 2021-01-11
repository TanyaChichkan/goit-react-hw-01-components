import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({name, tag,location, avatar,stats}){

  return (
  <div className = {styles.profile}>
    <div className ={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className = {styles.avatar}
        width = "100"
      />
      <p className ={styles.name}>{name}</p>
      <p className ={styles.tag}>{tag}</p>
      <p className ={styles.location}>{location}</p>
    </div>

    <ul className ={styles.stats}>
    <li className = {styles.item}>
      <span className ={styles.label}>Followers</span>
      <span className ={styles.quantity}> {stats.followers.toLocaleString('en-US')}</span>
    </li>
    <li className = {styles.item}>
      <span className ={styles.label}>Views</span>
      <span className ={styles.quantity}> {stats.views.toLocaleString('en-US')}</span>
    </li>
    <li className = {styles.item}>
      <span className ={styles.label}>Likes</span>
      <span className ={styles.quantity}> {stats.likes.toLocaleString('en-US')}</span>
    </li>
  </ul>
  </div>
  )

}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.object.isRequired

};

export default Profile;