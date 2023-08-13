import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={'/tasks'}>
        That's just an empty home screen, Click here to view tasks
      </Link>
    </div>
  )
}

export default Tasks
