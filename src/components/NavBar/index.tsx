import React from 'react'
import styles from './index.module.scss'
import copiesPrefix from '../../copies.json'

const copies = copiesPrefix.navBar

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.logo}>{copies.logo}</span>
      <img
        className={styles.userImg}
        src='https://gravatar.com/avatar/572140fa92540c6826c21b2615ba0909?s=400&d=mp&r=x'
      />
    </div>
  )
}

export default NavBar
