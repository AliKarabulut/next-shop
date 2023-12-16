type ComputerIconProps = {
  className?: string
  size?: number
}

const ComputerIcon = ({ className, size = 20 }: ComputerIconProps) => {
  return (
    <svg
      {...{ className }}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19l18 0" />
      <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
    </svg>
  )
}

export default ComputerIcon
