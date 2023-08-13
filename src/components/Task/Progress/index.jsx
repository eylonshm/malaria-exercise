import React, { FC } from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../../copies.json'

const copies = copiesPrefix.task.progress

const Progress = ({ title, newCount, oldCount }) => {
  const count = newCount + oldCount

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        {copies.total} {title}
      </h4>
      <span className={styles.total}>{count}</span>
      <div className={styles.data}>
        <span className={styles.counter}>
          <span className={styles.label}>{copies.new}</span> {newCount}
        </span>
        <span className={styles.counter}>
          <span className={styles.label}>{copies.existing}</span> {oldCount}
        </span>
      </div>
    </div>
  )
}

export default Progress
