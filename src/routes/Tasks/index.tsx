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
        startedOn='12/03/12'
        fetchedOn='12/12/33'
        dueOn='12/22/33'
        estimation='12/12/33'
      />
    </div>
  )
}

export default Tasks
