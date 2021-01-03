import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


function Statistics({title,stats}){
  return (
    <section className={styles.statistics}>
      {title && <div className = {styles.titleWrapper}>
      <h2 className={styles.title}>Upload stats</h2>
      </div>}

      <ul className={styles.statList}>
      {stats.map(item=>(
      <li key = {item.id} className = {styles.statsItem}>
        <span className = "label">{item.label}</span>
        <span className = "percentage">{item.percentage}%</span>
      </li>
      ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
     id:PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired

  }),).isRequired,
}

export default Statistics;