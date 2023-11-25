import Link from "next/link";

type IconButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  label?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const getStyles = (disabled: boolean, className: string) =>
  `min-w-[34px] min-h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

const IconButton = ({ children, href, label,onClick, className = "", disabled = false, type = "button", ...props }: IconButtonProps) => {
  const styles = getStyles(disabled, className);

  const content = (
    <>
      {children}
      {label && <span className="px-2">{label}</span>}
    </>
  );

  return href ? (
    <Link href={href} {...props} className={styles}>
      {content}
    </Link>
  ) : (
    <button {...props} onClick={onClick} disabled={disabled} type={type} className={styles}>
      {content}
    </button>
  );
};

export default IconButton;
