import React, { FC } from 'react'
import copiesPrefix from '../../../copies.json'

const copies = copiesPrefix.task.information

interface InformationProps {
  startedOn?: string
  fetchedOn?: string
  estimation?: string
  dueOn?: string
  completedOn?: string
}

const Information: FC<InformationProps> = ({
  startedOn,
  fetchedOn,
  estimation,
  dueOn,
  completedOn,
}) => {
  return (
    <>
      {startedOn && (
        <span>
          {copies.startedOn} {startedOn}
        </span>
      )}
      {fetchedOn && (
        <span>
          {copies.fetchedOn} {fetchedOn}
        </span>
      )}
      {completedOn && (
        <span>
          {copies.completedOn} {completedOn}
        </span>
      )}
      {estimation && (
        <span style={{ marginTop: '20px' }}>
          {copies.estimation} {estimation}
        </span>
      )}
      {dueOn && (
        <span>
          {copies.dueOn} {dueOn}
        </span>
      )}
    </>
  )
}

export default Information
