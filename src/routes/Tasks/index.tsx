import React from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'
import Button from '../../components/Button'

const copies = copiesPrefix.tasks

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3>{copies.header}</h3>
        <Button text={copies.addTask} onClick={() => {}} />
      </div>
    </div>
  )
}

export default Tasks
