//@ts-nocheck

import React, { useCallback, useState, useEffect } from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'
import Button from '../../components/Button'
import Task from '../../components/Task'
import { TASKS } from '../../mock/data'
import { Rings } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

const copies = copiesPrefix.tasks

const Tasks = () => {
  const [tasks, setTasks] = useState<[]>([])

  const loadingSpinner = () => {
    return (
      <Rings
        height='80'
        width='80'
        color='#eaae13'
        radius='6'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='rings-loading'
      />
    )
  }
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
        id,
      }) => (
        <Task
          key={id}
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

  useEffect(() => {
    // API CALL SHOULD BE HERE
    setTimeout(() => {
      setTasks(TASKS)
    }, 1500)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3 className={styles.title}>{copies.header}</h3>
        <Link to={ROUTES.addTask} style={{ textDecoration: 'none' }}>
          <Button text={copies.addTask} onClick={() => {}} />
        </Link>
      </div>
      <div className={styles.tasks}>
        {tasks.length === 0 ? loadingSpinner() : renderTasks()}
      </div>
    </div>
  )
}

export default Tasks
