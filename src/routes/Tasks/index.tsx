import React, { useCallback } from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'
import Button from '../../components/Button'
import Task from '../../components/Task'
import { TASKS } from '../../mock/data'

const copies = copiesPrefix.tasks

const Tasks = () => {
  const renderTasks = useCallback(() => {
    return TASKS.map(
      ({
        villageName,
        assignee,
        type,
        status,
        startedOn,
        fetchedOn,
        dueOn,
        estimation,
        progression,
      }) => (
        <Task
          villageName={villageName}
          assignee={assignee}
          type={type}
          status={status}
          startedOn={startedOn}
          fetchedOn={fetchedOn}
          dueOn={dueOn}
          estimation={estimation}
          progression={progression}
        />
      ),
    )
  }, [TASKS])

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>{copies.header}</h3>
        <Button text={copies.addTask} onClick={() => {}} />
      </div>
      <div className={styles.tasks}>{renderTasks()} </div>
    </div>
  )
}

export default Tasks
