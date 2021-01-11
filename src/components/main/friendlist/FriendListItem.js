import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({avatar, name, isOnline}){

  let statusOnline = isOnline === true;
  const status = statusOnline ? styles.online :
  styles.offline;

  return (
  <li className={styles.item}>
    <span className={status}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt="portrait" width="48" />
    <p className="name">{name}</p>
  </li>
  )
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;