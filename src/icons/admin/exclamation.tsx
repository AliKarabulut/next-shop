type ExclamationIconProps = {
  className?: string;
};

function ExclamationIcon({ className }: ExclamationIconProps) {
  return (
    <svg
      {...{ className }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0M12 9v4M12 16v.01" />
    </svg>
  );
}

export default ExclamationIcon;
