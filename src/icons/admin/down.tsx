type ChevronDownIconProps = {
  className?: string;
};

const ChevronDownIcon = ({ className }: ChevronDownIconProps) => (
  <svg
    {...{ className }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="1.2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 9l6 6l6 -6"></path>
  </svg>
);

export default ChevronDownIcon;
