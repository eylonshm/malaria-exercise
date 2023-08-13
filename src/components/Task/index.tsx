import React, { FC } from 'react'
import styles from './index.module.scss'

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

const Task: FC<TaskProps> = ({ villageName, assignee, type, status }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        <span className={styles.workType}>{type}</span>
        <h4 className={styles.villageName}>
          {villageName} <span className={(styles.status, styles[status])} />
        </h4>
        <span className={styles.assignee}>{assignee}</span>
      </div>
    </div>
  )
}

export default Task
