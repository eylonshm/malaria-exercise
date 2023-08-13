import React, { FC } from 'react'
import styles from './index.module.scss'
import Button from '../Button'
import copiesPrefix from '../../copies.json'
import classNames from 'classnames'
import Information from './Information'

const copies = copiesPrefix.task

interface TaskProps {
  villageName: string
  assignee: string
  type: 'survey' | 'treat'
  status: 'notActive' | 'active' | 'compoleted'
  startedOn?: string
  fetchedOn?: string
  estimation?: string
  dueOn?: string
  completedOn?: string
  progression?: {
    waterBodies?: {
      new: number
      exists: number
    }
    sprayedWaterBodies?: {
      new: number
      exists: number
    }
    sampledWaterBodies?: {
      new: number
      exists: number
    }
    waterBodiesWithIssues?: {
      new: number
      exists: number
    }
    houses?: {
      new: number
      exists: number
    }
  }
}

// const fieldsToDisplay = ['startedOn', 'fetchedOn', 'estimation', 'dueOn', 'completedOn']

const Task: FC<TaskProps> = ({
  villageName,
  assignee,
  type,
  status,
  startedOn,
  fetchedOn,
  completedOn,
  dueOn,
  estimation,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        <span className={styles.workType}>{type}</span>
        <div className={styles.villageName}>
          <h3>{villageName}</h3>
          <div className={classNames(styles.status, styles[status])} />
        </div>
        <span className={styles.assignee}>{assignee}</span>
        <Information
          startedOn={startedOn}
          fetchedOn={fetchedOn}
          dueOn={dueOn}
          completedOn={completedOn}
          estimation={estimation}
        />
      </div>
      <div>Something Should Be Here</div>
      {status === 'active' && (
        <Button
          className={styles.markAsCompleted}
          text={copies.completeTaskButton}
          onClick={() => {}}
        />
      )}
    </div>
  )
}

export default Task
