import React from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'

const copies = copiesPrefix.tasks

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3>{copies.header}</h3>
        <button>Add Task</button>
      </div>
    </div>
  )
}

export default Tasks
