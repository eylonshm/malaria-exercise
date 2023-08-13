import React, { FC } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface ButtonProps {
  className?: string
  text: string
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={classNames(styles.wrapper, className)} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
