type ChevronUpIconProps = {
  className?: string
  size?: number
}

const ChevronUpIcon = ({ className, size = 16 }: ChevronUpIconProps) => (
  <svg
    {...{ className }}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 15l6 -6l6 6"></path>
  </svg>
)

export default ChevronUpIcon
