import React from 'react'

type ProgressBarProps = {
  max: number
  value: number
}

const ProgressBar = ({ max, value }: ProgressBarProps) => {
  const width = (value / max) * 100

  return (
    <div className="w-full text-sm text-lightDark">
      <div className="mb-1 flex justify-between">
        <span>
          Already Sold: <strong>{value}</strong>
        </span>
        <span>
          Available: <strong>{max}</strong>
        </span>
      </div>
      <div className="h-4 rounded-[10px] bg-admin-grey-200">
        <div style={{ width: `${width}%` }} className="h-full rounded-[10px] bg-yellow"></div>
      </div>
    </div>
  )
}

export default ProgressBar
