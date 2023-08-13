import React, { FC } from 'react'
import styles from './index.module.scss'
import Button from '../Button'
import copiesPrefix from '../../copies.json'
import classNames from 'classnames'
import Information from './Information'
import Progress from './Progress'

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
      newCount: number
      oldCount: number
    }
    sprayedWaterBodies?: {
      newCount: number
      oldCount: number
    }
    sampledWaterBodies?: {
      newCount: number
      oldCount: number
    }
    waterBodiesWithIssues?: {
      newCount: number
      oldCount: number
    }
    houses?: {
      newCount: number
      oldCount: number
    }
  }
}

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
      <Progress title={'Water Bodies'} newCount={32} oldCount={8} />
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
