import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={ROUTES.tasks}>
        That's just an empty home screen, Click here to view tasks
      </Link>
    </div>
  )
}

export default Tasks
