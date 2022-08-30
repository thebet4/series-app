import React from 'react'

import { Container, SchedulerText } from './styles'

type SeriesSchedulerProps = {
  scheduler?: {
    days: string[]
    time: string
  }
  status: string
}

const SeriesScheduler = ({ scheduler, status }: SeriesSchedulerProps) => {
  return (
    <Container>
      {scheduler &&
        scheduler.days.map((category, index) => (
          <SchedulerText key={category}>
            {category}
            {index !== scheduler.days.length - 1 ? ', ' : ''}
          </SchedulerText>
        ))}

      {scheduler?.time && <SchedulerText> at {scheduler?.time}</SchedulerText>}
      {status && <SchedulerText>{` (${status})`}</SchedulerText>}
    </Container>
  )
}

export default SeriesScheduler
