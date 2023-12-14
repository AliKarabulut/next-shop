type DatabasePlusIconProps = {
  className?: string;
};

const DatabasePlusIcon = ({ className }: DatabasePlusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...{ className }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path>
      <path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224"></path>
      <path d="M20 12v-6"></path>
      <path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
    </svg>
  );
};

export default DatabasePlusIcon;
