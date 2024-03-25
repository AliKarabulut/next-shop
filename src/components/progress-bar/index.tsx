import React from 'react'

type ProgressBarProps = {
  max: number
  value: number
}

const ProgressBar = ({ max, value }: ProgressBarProps) => {
  const width = (value / max) * 100

  return (
    <div className="progress-bar-container ">
      <div className="progress-bar-labels">
        <span>
          Already Sold: <strong>{value}</strong>
        </span>
        <span>
          Available: <strong>{max}</strong>
        </span>
      </div>
      <div className="progress-bar-background">
        <div style={{ width: `${width}%` }} className="progress-bar-fill"></div>
      </div>
    </div>
  )
}

export default ProgressBar
