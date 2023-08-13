import React from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'
import Button from '../../components/Button'
import Task from '../../components/Task'

const copies = copiesPrefix.tasks

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>{copies.header}</h3>
        <Button text={copies.addTask} onClick={() => {}} />,
      </div>
      <Task
        villageName='Banbuiyas'
        assignee='Or Meydan'
        type='survey'
        status='active'
      />
    </div>
  )
}

export default Tasks
