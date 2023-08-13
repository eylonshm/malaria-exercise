// @ts-nocheck

import React, { FC, useCallback } from 'react'
import styles from './index.module.scss'
import Button from '../Button'
import copiesPrefix from '../../copies.json'
import classNames from 'classnames'
import Information from './Information'
import Progress from './Progress'
import { PROGRESSION_STRINGS } from '../../constants'

const copies = copiesPrefix.task

interface TaskProps {
  villageName: string
  assignee: string
  type: string
  status: string
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
  progression,
}) => {
  const createProgressionBars = useCallback(() => {
    const progressionBars = []

    for (const key in progression) {
      progressionBars.push(
        <Progress
          title={PROGRESSION_STRINGS[key]}
          newCount={progression[key].newCount}
          oldCount={progression[key].oldCount}
        />,
      )
    }

    return progressionBars.map((progressionBars, index) => (
      <div className={styles.progressBar}>
        {index !== 0 && <div className={styles.bufferLine} />}
        {progressionBars}
      </div>
    ))
  }, [])

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
      <div className={styles.progressionBars}>{createProgressionBars()}</div>
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
