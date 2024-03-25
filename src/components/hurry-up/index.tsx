'use client'
import { useEffect, useState } from 'react'

import HurryUpBox from '@/components/hurry-up/hurry-up-box'

type HurryUpProps = {
  date: Date
}

const HurryUp = ({ date }: HurryUpProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +date - +new Date()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [date, timeLeft])

  return (
    <div className="hurry-up-container">
      <div className="hurry-up-title">Hurry Up! Offer ends in</div>
      <div className="hurry-up-box-container">
        {timeLeft.days > 0 && <HurryUpBox name="days" number={timeLeft.days} />}
        <HurryUpBox name="hours" number={timeLeft.hours} />
        <HurryUpBox name="minutes" number={timeLeft.minutes} />
        <HurryUpBox name="seconds" number={timeLeft.seconds} last />
      </div>
    </div>
  )
}

export default HurryUp
