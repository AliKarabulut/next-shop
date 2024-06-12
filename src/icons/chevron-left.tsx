type ChevronLeftIconProps = {
  className?: string
  size?: number
}

const ChevronLeftIcon = ({ className, size = 20 }: ChevronLeftIconProps) => {
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
      <path d="M15 6l-6 6l6 6" />
    </svg>
  )
}

export default ChevronLeftIcon
